import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';


async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('To do')
    .setDescription('In this site you might be crud')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  
  app.enableCors();
  // app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))
  await app.listen(process.env.PORT,()=>{
    console.log(`connected ${process.env.PORT}`);
    
  });
}
bootstrap();
