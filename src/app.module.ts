import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigurationModule } from './configuration/configuration.module';
import { RedisModule } from './databases/redis/redis.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RedisModule, ConfigurationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
