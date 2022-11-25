import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { RedisField, RedisKey, RedisValue } from './types';
@Injectable()
export class RedisService {
  private redis: Redis;
  constructor(private readonly configService: ConfigurationService) {
    this.redis = new Redis(this.configService.redis);
  }

  async set(key: RedisKey, value: RedisValue): Promise<void> {
    await this.redis.set(key, value, 'EX', this.configService.redisKeyExpirationSeconds);
  }

  async get(key: RedisKey): Promise<string> {
    return this.redis.get(key);
  }

  async hset(key: RedisKey, value: any): Promise<void> {
    await this.redis.hset(key, value);
    await this.redis.expire(key, this.configService.redisKeyExpirationSeconds, 'NX');
  }

  async hget(key: RedisKey, field: RedisField): Promise<any> {
    return this.redis.hget(key, field);
  }

  async hgetAll(key: RedisKey): Promise<any> {
    return this.redis.hgetall(key);
  }
}
