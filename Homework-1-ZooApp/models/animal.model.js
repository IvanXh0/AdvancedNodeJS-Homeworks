import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class AnimalModel {
  static async getAllAnimals(query) {
    const collection = await getDb().collection("animal");
    let animals = await collection.find().toArray();

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
    const collection = await getDb().collection("animal");
    const createdAnimal = await collection.insertOne(body);
    return { id: createdAnimal.insertedId, ...body };
  }
  static async editAnimal(id, body) {
    const collection = await getDb().collection("animal");
    const newInfo = await collection.updateOne(
      {
        _id: new ObjectId(id),
      },
      { $set: body }
    );
    return newInfo;
  }
  static async deleteAnimal(id) {
    const collection = await getDb().collection("animal");
    const deletedAnimal = await collection.deleteOne({
      _id: new ObjectId(id),
    });
    return deletedAnimal;
  }
}
