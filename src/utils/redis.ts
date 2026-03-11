import IORedis from "ioredis";


export const redis = new IORedis({
  host: process.env.REDIS_HOST || "localhost",
  password: process.env.REDIS_PASSWORD || undefined, //Local thì không sử dụng redis password, khi deploy lên server thì mới sử dụng password để bảo mật
  port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
  db: process.env.REDIS_DB ? Number(process.env.REDIS_DB) : undefined,
  maxRetriesPerRequest: null,
});

// Minimal, always-on Redis connection logs to help debug mail sending via queue.
redis.on("connect", () => {
  console.log("[redis] connect", {
    host: redis.options.host,
    port: redis.options.port,
    password: redis.options.password,
    db: redis.options.db,
  });
});
redis.on("ready", () => {
  console.log("[redis] ready");
});
redis.on("reconnecting", (time) => {
  console.log("[redis] reconnecting", { time });
});
redis.on("close", () => {
  console.log("[redis] close");
});
redis.on("end", () => {
  console.log("[redis] end");
});
redis.on("error", (err) => {
  console.error("[redis] error", err);
});