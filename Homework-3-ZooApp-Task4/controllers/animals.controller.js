import AnimalService from "../services/animal.service.js";

export default class AnimalsController {
  static async getAllAnimals(req, res) {
    try {
      const id = req.params.id;
      if (id) {
        const animal = await AnimalService.getAnimalById(id);
        res.status(200).send(animal);
      } else {
        const animals = await AnimalService.getAllAnimals(req.query);
        res.status(200).send(animals);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async addNewAnimal(req, res) {
    try {
      const newAnimal = await AnimalService.addNewAnimal(req.body);
      res.status(200).send(newAnimal);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async editAnimal(req, res) {
    try {
      const editedAnimal = await AnimalService.editAnimal(
        req.params.id,
        req.body
      );
      res.status(200).send(editedAnimal);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async deleteAnimal(req, res) {
    try {
      await AnimalService.deleteAnimal(req.params.id);
      res.status(200).send({ message: "Successfully deleted animal" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
