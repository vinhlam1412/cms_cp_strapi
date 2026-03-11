import { redis } from "./redis";

export async function checkRateLimit(ip: string) {
  const key = `ratelimit:${ip}`;

  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, 60);
  }

  return count <= 5;
}