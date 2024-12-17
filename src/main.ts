import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Automatically transform payloads to DTO instances
    whitelist: true, // Remove properties that are not part of the DTO
    forbidNonWhitelisted: true, // Throw an error if unknown properties are passed
  }));

  await app.listen(3000);
}
bootstrap();
