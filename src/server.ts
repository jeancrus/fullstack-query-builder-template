import express, { Request, Response } from "express";
import { knex } from "./database/knex";
const app = express();
app.use(express.json());

app.get("/courses", async (request: Request, response: Response) => {
  const courses = await knex("courses").select("*").orderBy("title", "asc");

  return response.status(200).json({ message: courses });
});

app.post("/courses", async (request: Request, response: Response) => {
  const { title, slug } = request.body;

  const [course] = await knex("courses")
    .insert({
      title,
      slug,
    })
    .returning("*");

  // await knex.raw("INSERT INTO courses (title, slug) VALUES (?, ?)", [
  //   title,
  //   slug,
  // ]);

  return response.status(201).json({ message: "Course created successfully" });
});

app.put("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { title, slug } = request.body;

  await knex("courses").where("id", id).update({
    title,
    slug,
    updated_at: knex.fn.now(),
  });

  return response.status(200).json({ message: "Course updated successfully" });
});

app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  await knex("courses").where("id", id).delete();

  return response.status(200).json({ message: "Course deleted successfully" });
});

app.get(
  "/courses/:id/modules",
  async (request: Request, response: Response) => {
    const { id } = request.params;

    const modules = await knex("course_modules")
      .select(["course_modules.*", "courses.title as course_title"])
      .where("course_id", id)
      .innerJoin("courses", "course_modules.course_id", "courses.id")
      .orderBy("course_modules.title", "asc");

    return response.status(200).json({ message: modules });
  }
);

app.post(
  "/courses/:id/modules",
  async (request: Request, response: Response) => {
    const { id } = request.params;
    const { title, slug } = request.body;

    await knex("course_modules").insert({
      course_id: id,
      title,
      slug,
    });

    return response
      .status(201)
      .json({ message: "Module created successfully" });
  }
);

app.listen(3333, () => console.log(`Server is running on port 3333`));
