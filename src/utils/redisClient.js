import redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

export const client = new redis(
  {
    host : process.env.REDIS_HOST,
    port : process.env.REDIS_PORT,
    password : process.env.REDIS_PASSWORD
  }
);