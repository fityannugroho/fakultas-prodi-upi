import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.APP_PORT || 3000;

  await app.listen(port);
  await console.log(`App is running successfully at http://localhost:${port}.`);
}
bootstrap();
