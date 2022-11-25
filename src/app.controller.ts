import { Body, Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { RedisService } from './databases/redis/redis.service';
import { RedisKey, RedisValue } from './databases/redis/types';
import { BodyExampleDto } from './dtos/body-example.dto';
import { QueryExampleDto } from './dtos/query-example.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly redisService: RedisService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  validationExample(
    @Body(ValidationPipe) bodyExample: BodyExampleDto,
    @Query(ValidationPipe) queryExample: QueryExampleDto
  ): { body: BodyExampleDto; query: QueryExampleDto } {
    return { body: bodyExample, query: queryExample };
  }

  @Post('redis')
  async redisSet(@Body('key', ValidationPipe) key: RedisKey, @Body('value', ValidationPipe) value: any): Promise<void> {
    await this.redisService.hset(key, value);
  }

  @Get('redis')
  async redisGet(@Query('key') key: RedisKey): Promise<RedisValue> {
    return this.redisService.hgetAll(key);
  }
}
