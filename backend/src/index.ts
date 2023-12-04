import { PrismaClient } from "@prisma/client";
import express from "express";
import multer from "multer";
import { send } from "process";
const prisma = new PrismaClient();
const app = express();
const upload = multer({ dest: "public/img/" });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.get("/api/dishes", async (req, res) => {
  const users = await prisma.section.findMany({ include: { Dish: true } });
  res.json(users);
});

app.post("/api/dishes", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const id = Number.parseInt(req.body.id, 10);
  const img = req.file?.filename;
  const name: string = req.body.name;
  const price: number = Number.parseInt(req.body.price, 10);
  const description: string = req.body.description;
  const htmlId: string = req.body.section;

  if (isNaN(price)) {
    res.sendStatus(400);
    return;
  }

  const section = await prisma.section.findUnique({ where: { htmlId } });
  if (id === -1) {
    await prisma.dish.create({
      data: {
        name,
        price,
        description,
        sectionId: section?.id!,
        img: img || "no-image.png",
      },
    });
  } else {
    await prisma.dish.update({
      where: {
        id,
      },
      data: {
        name,
        price,
        description,
        sectionId: section?.id,
        img,
      },
    });
  }
  res.json();
});

app.get("/api/sections", async (req, res) => {
  const sections = await prisma.section.findMany();
  res.json(sections);
});

app.listen(3000, () =>
  console.log("REST API server ready at: http://localhost:3000")
);