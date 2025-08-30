import express from "express";
import database from "./config.js";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const upload = multer({ storage: multer.memoryStorage() });

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.post("/upload", upload.array("files"), async (req, res) => {
  const db = database();
  // const files = req.files;

  console.log(req.files);
  

  try {
    const folder = Date.now();
    // for (const file of files) {
    //   const { data, error } = await db.storage
    //     .from("fashion")
    //     .upload(`${folder}/${file.originalname}`, file.buffer, {
    //       contentType: file.mimetype,
    //       cacheControl: "3600",
    //       upsert: false,
    //     });

    //   if (error) throw error;
    // }

    res.json({ message: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(3000, () => {
  console.log("server is running at port 3000");
});
