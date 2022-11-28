import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: [{ emit: 'stdout', level: 'query' }]
    });
  }
  async onModuleInit(): Promise<void> {
    this.$use(async (params, next) => {
      const before = Date.now();
      const result = await next(params);
      const after = Date.now();

      // eslint-disable-next-line no-console
      console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
      return result;
    });
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication): Promise<void> {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
