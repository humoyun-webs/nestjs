import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { HistoryService } from './history.service';
import { UpdateHistoryDto } from './dto/create-history.dto';


@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}


  @Get()
  findAll() {
    return this.historyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateHistoryDto  ) {
    return this.historyService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historyService.remove(id);
  }
}
