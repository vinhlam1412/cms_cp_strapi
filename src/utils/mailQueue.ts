import { Queue } from "bullmq";
import { redis } from "../utils/redis";

export const mailQueue = new Queue("mail-queue", {
  connection: {
    host: redis.options.host,
    port: redis.options.port,
    password: redis.options.password,
    db: redis.options.db,
  },
});

let counter = 0;
let cooldownUntil = 0;
let lastScheduledTime = 0; // Thời gian job cuối cùng được schedule

export const addMailToQueue = async (emailData: any, meta: any = {}) => {
  const now = Date.now();

  // Nếu đang trong cooldown, đợi cho đến khi hết
  if (cooldownUntil > now) {
    await new Promise((r) => setTimeout(r, cooldownUntil - now));
  }

  counter++;

  // Tính delay: 5 phút từ job trước (hoặc 0 nếu là job đầu tiên)
  const baseDelay = 5 * 60 * 1000; // 5 phút
  let delay = 0;

  if (lastScheduledTime > 0) {
    // Job không phải đầu tiên: delay = 5 phút từ job trước
    const timeSinceLastScheduled = now - lastScheduledTime;
    delay = Math.max(0, baseDelay - timeSinceLastScheduled);
  }
  // Nếu lastScheduledTime = 0 (job đầu tiên), delay = 0 (chạy ngay)

  // Sau mỗi 10 email, thêm cooldown 15-30 phút
  if (counter % 10 === 0) {
    const cooldown = (15 + Math.random() * 15) * 60 * 1000;
    cooldownUntil = now + delay + cooldown;
    delay += cooldown;
  }

  // Cập nhật thời gian job này được schedule
  lastScheduledTime = now + delay;

  const job = await mailQueue.add(
    "send-mail",
    {
      emailData,
      meta,
    },
    {
      delay,
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 10000,
      },
      removeOnComplete: true,
      removeOnFail: false,
    }
  );

  return job;
};