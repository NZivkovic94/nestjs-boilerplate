import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MainVariables } from './env-vars';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  get main(): MainVariables {
    return this.configService.get<MainVariables>('main');
  }
}
