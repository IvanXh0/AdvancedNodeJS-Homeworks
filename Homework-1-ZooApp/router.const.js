import express from "express";
import zookeepersRoute from "./routes/zookeepers.routes.js";
import animalsRoute from "./routes/animals.routes.js";

const router = express.Router();

router.use("/zookeepers", zookeepersRoute);
router.use("/animals", animalsRoute);

export default router;
