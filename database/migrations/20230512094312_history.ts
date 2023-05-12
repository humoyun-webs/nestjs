import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   
        return knex.schema.createTable('history', (table)=>{
            table.uuid("history_id").primary().defaultTo(knex.raw('uuid_generate_v4()')).notNullable();
            table.integer("history_buy").notNullable();
            table.integer("history_sell").notNullable();
            table.uuid("advert_id").references("advert_id").inTable("advert").onDelete("cascade");
            table.boolean("user_isActive").defaultTo(true).notNullable();
        })
}


export async function down(knex: Knex): Promise<void> {
    await  knex.schema.dropTable("history");
}
