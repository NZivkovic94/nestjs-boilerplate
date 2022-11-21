import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigurationService } from './configuration/configuration.service';
import env from './configuration/env';
import { RedisModule } from './databases/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [env]
    }),
    RedisModule
  ],
  controllers: [AppController],
  providers: [AppService, ConfigurationService]
})
export class AppModule {}
