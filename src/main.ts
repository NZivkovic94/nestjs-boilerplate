import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigurationService } from './configuration/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {
    main: { port }
  } = app.get(ConfigurationService);

  await app.listen(port);
}
bootstrap();
