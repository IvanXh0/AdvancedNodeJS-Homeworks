import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import router from "./router.const.js";
import { connectToDatabase } from "./db/mongo-connection.js";
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, HOST, async (error) => {
  if (error) console.log(error);

  await connectToDatabase();
  console.log(`Successfully connected to http://${HOST}:${PORT}`);
});
