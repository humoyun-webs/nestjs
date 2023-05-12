import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports:[SharedModule],
  controllers: [HistoryController],
  providers: [HistoryService],
  exports:[SharedModule]
})
export class HistoryModule {}
