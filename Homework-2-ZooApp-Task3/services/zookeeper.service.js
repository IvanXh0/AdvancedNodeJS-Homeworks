import Zookeeper from "../models/zookeper.model.js";

export default class ZookeeperModel {
  static async getAllZookeepers() {
    const zookeepers = await Zookeeper.find({});
    return zookeepers;
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
}
