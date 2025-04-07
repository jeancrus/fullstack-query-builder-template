import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    {
      title: "bellum curvo tredecim",
      slug: "concedo-aestas-incidunt",
      created_at: "2025-04-07 00:16:18",
      updated_at: "2025-04-07 00:16:18",
    },
    {
      title: "celebrer dicta torrens",
      slug: "thesaurus-artificiose-ademptio",
      created_at: "2025-04-07 01:40:08",
      updated_at: "2025-04-07 01:40:08",
    },
    {
      title: "cogo beneficium crur",
      slug: "animadverto-degenero-voluptates",
      created_at: "2025-04-07 00:16:17",
      updated_at: "2025-04-07 00:16:17",
    },
    {
      title: "concedo sonitus omnis",
      slug: "terebro-copia-commodo",
      created_at: "2025-04-07 00:16:18",
      updated_at: "2025-04-07 00:16:18",
    },
    {
      title: "cum talis ustilo",
      slug: "defessus-amet-conitor",
      created_at: "2025-04-07 01:40:07",
      updated_at: "2025-04-07 01:40:07",
    },
    {
      title: "nam cupiditas nulla",
      slug: "arto-verumtamen-utrimque",
      created_at: "2025-04-07 00:16:09",
      updated_at: "2025-04-07 00:16:09",
    },
    {
      title: "strues rerum accusantium",
      slug: "copia-solitudo-cogito",
      created_at: "2025-04-07 00:16:40",
      updated_at: "2025-04-07 00:16:40",
    },
    {
      title: "sufficio reiciendis auctus",
      slug: "abduco-audentia-sequi",
      created_at: "2025-04-07 00:16:18",
      updated_at: "2025-04-07 00:16:18",
    },
    {
      title: "tracto cernuus vos",
      slug: "derideo-bis-certe",
      created_at: "2025-04-07 00:16:41",
      updated_at: "2025-04-07 00:16:41",
    },
    {
      title: "video cribro conventus",
      slug: "tenus-totidem-absconditus",
      created_at: "2025-04-07 00:16:18",
      updated_at: "2025-04-07 00:16:18",
    },
  ]);
}
