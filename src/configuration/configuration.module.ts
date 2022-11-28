import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationService } from './configuration.service';
import env from './env';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [env]
    })
  ],
  exports: [ConfigurationService],
  providers: [ConfigurationService]
})
export class ConfigurationModule {}
