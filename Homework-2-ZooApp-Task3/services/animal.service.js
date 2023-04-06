import Animal from "../models/animal.model.js";

export default class AnimalService {
  static async getAllAnimals(query) {
    let animals = await Animal.find({});

    //NOTE: I made the query search so it works with the required format, you can either search by City or by Country, or both.
    if (query?.location) {
      const queryLocation = query.location.toLowerCase();
      animals = animals.filter((a) =>
        a.location.toLowerCase().includes(queryLocation)
      );
    }
    return animals;
  }
  static async addNewAnimal(body) {
    const newAnimal = new Animal(body);
    const response = await newAnimal.save();

    return response;
  }
  static async editAnimal(id, body) {
    const animal = await Animal.findById(id);

    if (!animal) throw new Error(`Animal with ID:${id} doesn't exist!`);

    const keys = Object.keys(body);

    keys.forEach((key) => {
      if (key !== "_id" && key !== "__v") {
        animal[key] = body[key];
      }
    });

    const updatedAnimal = await animal.save();

    return updatedAnimal;
  }
  static async deleteAnimal(id) {
    await Animal.findByIdAndDelete(id);
  }
}
