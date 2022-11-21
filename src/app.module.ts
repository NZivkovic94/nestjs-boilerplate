import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RedisModule } from "./databases/redis/redis.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    RedisModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
