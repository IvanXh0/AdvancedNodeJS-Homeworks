import ZookeeperService from "../services/zookeeper.service.js";

export default class ZookeepersController {
  static async getAllZookeepers(req, res) {
    try {
      const zookeepers = await ZookeeperService.getAllZookeepers();
      res.status(200).send(zookeepers);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async addNewZookeeper(req, res) {
    try {
      const newZookeeper = await ZookeeperService.addNewZookeeper(req.body);
      res.status(200).send(newZookeeper);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async editZookeeper(req, res) {
    try {
      const editedZookeeper = await ZookeeperService.editZookeeper(
        req.params.id,
        req.body
      );
      res.status(200).send(editedZookeeper);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async deleteZookeeper(req, res) {
    try {
      await ZookeeperService.deleteZookeeper(req.params.id);
      res.status(200).send({ message: "Successfully deleted zookeeper" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
