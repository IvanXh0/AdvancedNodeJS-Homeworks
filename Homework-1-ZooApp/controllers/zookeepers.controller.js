import ZookeeperModel from "../models/zookeeper.model.js";

export default class ZookeepersController {
  static async getAllZookeepers(req, res) {
    try {
      const zookeepers = await ZookeeperModel.getAllZookeepers();
      res.status(200).send(zookeepers);
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong while getting zookeepers data",
      });
    }
  }
  static async addNewZookeeper(req, res) {
    try {
      const newZookeeper = await ZookeeperModel.addNewZookeeper(req.body);
      res.status(200).send(newZookeeper);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Something went wrong while adding a new zookeeper" });
    }
  }
  static async editZookeeper(req, res) {
    try {
      const editedZookeeper = await ZookeeperModel.editZookeeper(
        req.params.id,
        req.body
      );
      res.status(200).send(editedZookeeper);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Something went wrong while editing zookeeper" });
    }
  }
  static async deleteZookeeper(req, res) {
    try {
      await ZookeeperModel.deleteZookeeper(req.params.id);
      res.status(200).send({ message: "Successfully deleted zookeeper" });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Something went wrong while deleting zookeeper" });
    }
  }
}
