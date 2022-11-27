import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigurationModule } from './configuration/configuration.module';
import env from './configuration/env';
import { RedisModule } from './databases/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [env]
    }),
    RedisModule,
    ConfigurationModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
