import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("courses", (table) => {
    table.timestamp("updated_at").defaultTo(knex.fn.now()).after("created_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("courses", (table) => {
    table.dropColumn("updated_at");
  });
}
