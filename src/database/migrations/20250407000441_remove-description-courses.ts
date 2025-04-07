import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("courses", (table) => {
    table.dropColumn("description");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("courses", (table) => {
    table.string("description").notNullable();
  });
}
