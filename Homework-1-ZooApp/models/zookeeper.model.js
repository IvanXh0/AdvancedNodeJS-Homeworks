import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class ZookeeperModel {
  static async getAllZookeepers() {
    const collection = await getDb().collection("zookeeper");
    const zookeepers = await collection.find().toArray();
    return zookeepers;
  }
  static async addNewZookeeper(body) {
    const collection = await getDb().collection("zookeeper");
    const createdZookeeper = await collection.insertOne(body);
    return { id: createdZookeeper.insertedId, ...body };
  }
  static async editZookeeper(id, body) {
    const collection = await getDb().collection("zookeeper");
    const newInfo = await collection.updateOne(
      {
        _id: new ObjectId(id),
      },
      { $set: body }
    );
    return newInfo;
  }
  static async deleteZookeeper(id) {
    const collection = await getDb().collection("zookeeper");
    const deletedZookeeper = await collection.deleteOne({
      _id: new ObjectId(id),
    });
    return deletedZookeeper;
  }
}
