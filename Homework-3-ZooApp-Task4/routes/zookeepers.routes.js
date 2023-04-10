import express from "express";
import ZookeepersController from "../controllers/zookeepers.controller.js";
import zookeeperValidator from "../middlewares/zookeeper-validator.middleware.js";

const router = express.Router();

router.get("/:id?", ZookeepersController.getAllZookeepers);
router.post("/", zookeeperValidator, ZookeepersController.addNewZookeeper);
router.put("/:id", ZookeepersController.editZookeeper);
router.delete("/:id", ZookeepersController.deleteZookeeper);
router.patch("/:id/animals", ZookeepersController.assignAnimal);

export default router;
