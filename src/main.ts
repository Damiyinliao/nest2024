import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { PORT } from './constant';
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // 接口版本控制
  app.enableVersioning({
    defaultVersion: '1',
    // defaultVersion: [VERSION_NEUTRAL, '1', '2'],
    type: VersioningType.URI
  })
  // 统一响应格式
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter)
  await app.listen(PORT);
}
bootstrap();
