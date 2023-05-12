import { Inject, Injectable } from '@nestjs/common';
import { UpdateHistoryDto } from './dto/create-history.dto';
import knex, { Knex } from 'knex';


@Injectable()
export class HistoryService {
  constructor(@Inject("KnexConnection")private knex:Knex){}

  async findAll() {
    const data = await this.knex("history").select("*")
    return {message:data};
  }

  async  findOne(id: string) {
    const data = await this.knex("advert").select("*").where({advert_id: id}).first();
    await this.knex("history").where({})
    console.log(data);
    
    return {message:data};
  }

  async update(id: string, body: UpdateHistoryDto) {
    const {buy,sell} = body;
    const data = await this.knex("history").update({
     advert_buy :buy,
     advert_sell: sell 
    }).where({history_id:id}).returning("*")
    return {message: data};
  }

  remove(id: string) {
    return `Success deleted ${id}`;
  }
}
