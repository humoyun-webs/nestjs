import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [ConfigModule.forRoot(), SharedModule, ProductModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
