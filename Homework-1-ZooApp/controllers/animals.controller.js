import AnimalModel from "../models/animal.model.js";

export default class AnimalsController {
  static async getAllAnimals(req, res) {
    try {
      const animals = await AnimalModel.getAllAnimals(req.query);
      res.status(200).send(animals);
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong while getting animals data",
      });
    }
  }
  static async addNewAnimal(req, res) {
    try {
      const newAnimal = await AnimalModel.addNewAnimal(req.body);
      res.status(200).send(newAnimal);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async editAnimal(req, res) {
    try {
      const editedAnimal = await AnimalModel.editAnimal(
        req.params.id,
        req.body
      );
      res.status(200).send(editedAnimal);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Something went wrong while editing animal" });
    }
  }
  static async deleteAnimal(req, res) {
    try {
      await AnimalModel.deleteAnimal(req.params.id);
      res.status(200).send({ message: "Successfully deleted animal" });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Something went wrong while deleting animal" });
    }
  }
}
