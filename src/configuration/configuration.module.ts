import { Global, Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';

@Global()
@Module({
  exports: [ConfigurationService],
  providers: [ConfigurationService]
})
export class ConfigurationModule {}
