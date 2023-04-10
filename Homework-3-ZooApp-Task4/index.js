import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router.const.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.${process.env.MONGO_SERVER}.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, HOST, async (error) => {
  if (error) console.log("problem connecting to database", error);

  await mongoose.connect(MONGO_URI);
  console.log(`Successfully connected to http://${HOST}:${PORT}`);
});
