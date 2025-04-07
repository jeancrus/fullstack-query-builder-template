import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("course_modules", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("slug").notNullable();
    table.timestamps(true, true);

    table
      .integer("course_id")
      .notNullable()
      .references("id")
      .inTable("courses")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("course_modules");
}
