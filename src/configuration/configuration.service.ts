import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MainVars, RedisVars } from './types';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  get main(): MainVars {
    return this.configService.get<MainVars>('main');
  }

  get port(): number {
    return this.configService.get<number>('main.port');
  }

  get redisKeyExpirationSeconds(): number {
    return this.configService.get<number>('main.redisKeyExpirationSeconds');
  }

  get redis(): RedisVars {
    return this.configService.get<RedisVars>('redis');
  }
}
