import { Worker } from "bullmq";
import { redis } from "../utils/redis";

export const startMailWorker = (strapi: any) => {
  const log = strapi?.log ?? console;
  log.info?.("[mailWorker] starting", {
    queue: "mail-queue",
    redis: { host: redis.options.host, port: redis.options.port, password: redis.options.password, db: redis.options.db },
  });

  const worker = new Worker(
    "mail-queue",
    async (job) => {
      const startedAt = Date.now();
      const { emailData, meta } = job.data ?? {};
      const requestId = meta?.requestId;

      log.info?.(
        `[mailWorker] job start ${JSON.stringify({
          jobId: job.id,
          requestId,
          name: job.name,
          attemptsMade: job.attemptsMade,
          to: emailData?.to,
          subject: emailData?.subject,
        })}`
      );

      try {
        await strapi.plugin("email").service("email").send(emailData);

        log.info?.(
          `[mailWorker] mail sent ${JSON.stringify({
            jobId: job.id,
            requestId,
            to: emailData?.to,
            durationMs: Date.now() - startedAt,
          })}`
        );
      } catch (err: any) {
        log.error?.(
          `[mailWorker] job failed ${JSON.stringify({
            jobId: job.id,
            requestId,
            to: emailData?.to,
            error: err?.message,
            stack: err?.stack,
            durationMs: Date.now() - startedAt,
          })}`
        );
        throw err; // keep BullMQ failure semantics
      }
    },
    {
      connection: {
        host: redis.options.host,
        port: redis.options.port,
        password: redis.options.password,
        db: redis.options.db,
      },
      concurrency: 5,
      limiter: {
      max: 1,
      duration: 5000,
    },
    }
  );

  worker.on("failed", (job, err) => {
    const requestId = (job as any)?.data?.meta?.requestId;
    log.error?.(
      `[mailWorker] failed event ${JSON.stringify({
        jobId: job?.id,
        requestId,
        attemptsMade: job?.attemptsMade,
        failedReason: (job as any)?.failedReason,
        error: err?.message,
        stack: err?.stack,
      })}`
    );
  });

  worker.on("completed", (job) => {
    log.info?.(`[mailWorker] completed ${JSON.stringify({ jobId: job.id })}`);
  });

  worker.on("stalled", (jobId) => {
    log.warn?.(`[mailWorker] job stalled ${JSON.stringify({ jobId })}`);
  });

  worker.on("error", (err) => {
    log.error?.(`[mailWorker] worker error ${JSON.stringify({ error: err?.message, stack: err?.stack })}`);
  });
};