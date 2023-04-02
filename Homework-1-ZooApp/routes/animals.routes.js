import express from "express";
import AnimalsController from "../controllers/animals.controller.js";
import animalValidator from "../middlewares/animal-validator.middleware.js";

const router = express.Router();

router.get("/", AnimalsController.getAllAnimals);
router.post("/", animalValidator, AnimalsController.addNewAnimal);
router.put("/:id", AnimalsController.editAnimal);
router.delete("/:id", AnimalsController.deleteAnimal);

export default router;
