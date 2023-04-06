import { Schema, model } from "mongoose";

const zookeeperSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 110,
  },
  location: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s]+,\s[a-zA-Z\s]+$/,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Zookeeper = model("Zookeeper", zookeeperSchema);

export default Zookeeper;

// name - is required, can't be less than 5 carachters
// age - is required, has to be between 18 - 110 years, including these two numbers
// location - is required
// isActive - is not required, has default value of false
