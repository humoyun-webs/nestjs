import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProdDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import knex, { Knex } from 'knex';

@Injectable()
export class ProductService {
  constructor(@Inject('KnexConnection') private knex: Knex) {}
  async create(body: CreateProductDto, file: Express.Multer.File) {
    const { buy, sell, url } = body;

    // const data = await this.knex("advert").select("*").where({advert_url: url}).first();

    // if(data)  throw new ForbiddenException("Title already is exists");

    // console.log(hashedpass);

    const newData = {
      advert_sell: sell,
      advert_buy: buy,
      avert_picture: file.filename,
      advert_url: url,
    };
    // const historyData = {history_sell:sell,history_buy:buy}

    await this.knex('advert').insert(newData);
    // await this.knex("history").insert(historyData)

    return { message: 'success', newData };
  }

  async getUsersByFilter(view) {
    const adverts = await this.knex('advert').whereBetween(
      'advert_created_at',
      [view[0], view[1]],
    );
    return { message: adverts };
  }

  async findAll() {
    const data = await this.knex('advert').select('*');

    return { message: data };
  }

  async findOne(id: string) {
    const data = await this.knex('advert')
      .select('*')
      .where({ advert_id: id })
      .first();

    return { message: data };
  }
  //s/sss

  async update(id: string, body: UpdateProdDto) {
    const { buy, sell, url } = body;
    const data = await this.knex('advert')
      .update({
        advert_buy: buy,
        advert_sell: sell,
        advert_url: url,
      })
      .where({ advert_id: id })
      .returning('*');
    return { message: data };
  }

  remove(id: string) {
    return `Success deleted ${id}`;
  }
}
