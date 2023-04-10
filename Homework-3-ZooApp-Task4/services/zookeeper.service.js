import Zookeeper from "../models/zookeper.model.js";
import AnimalService from "./animal.service.js";

export default class ZookeeperModel {
  static async getAllZookeepers(query) {
    let zookeepers = await Zookeeper.find({});

    //get all zookeepers from certain location
    if (query?.location) {
      const queryLocation = query.location.toLowerCase();
      zookeepers = zookeepers.filter((z) =>
        z.location.toLowerCase().includes(queryLocation)
      );
    }

    //get all zookeepers older than X

    if (query?.age) {
      const queryAge = query.age;

      zookeepers = zookeepers.filter((z) => z.age > queryAge);
    }

    // get all in/active zookeepers

    if (query.isActive) {
      const queryIsActive = query.isActive === "true";

      zookeepers = zookeepers.filter((z) => z.isActive === queryIsActive);
    }

    return zookeepers;
  }
  static async getZookeeperById(zookeeperId) {
    const zookeeper = await Zookeeper.findById(zookeeperId).populate("animals");
    if (!zookeeper) {
      throw new Error(`Zookeeper with id ${id} not found`);
    }
    return zookeeper;
  }
  static async addNewZookeeper(body) {
    const newZookeeper = new Zookeeper(body);
    const response = newZookeeper.save();

    return response;
  }
  static async editZookeeper(id, body) {
    const zookeeper = await Zookeeper.findById(id);

    if (!zookeeper) throw new Error(`Zookeeper with ID:${id} doesn't exist!`);

    const keys = Object.keys(body);

    keys.forEach((key) => {
      if (key !== "_id" && key !== "__v") {
        zookeeper[key] = body[key];
      }
    });

    const updatedZookeeper = await zookeeper.save();

    return updatedZookeeper;
  }
  static async deleteZookeeper(id) {
    await Zookeeper.findByIdAndDelete(id);
  }
  static async assignAnimal(zookeeperId, animalIds) {
    const zookeeper = await Zookeeper.findById(zookeeperId);

    if (!zookeeper) throw new Error(`Zookeeper with ID:${id} doesn't exist!`);

    zookeeper.animals = animalIds;

    for (const animalId of animalIds) {
      await AnimalService.editAnimal(animalId, { zookeeper: zookeeperId });
    }

    await zookeeper.save();

    return zookeeper;
  }
}
