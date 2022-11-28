import { Global, Module } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Global()
@Module({
  exports: [RedisService],
  providers: [RedisService]
})
export class RedisModule {}
