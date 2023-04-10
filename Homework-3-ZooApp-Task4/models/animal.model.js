import { Schema, model } from "mongoose";

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s]+,\s[a-zA-Z\s]+$/,
  },
  gender: {
    type: String,
    required: true,
    enum: ["M", "F"],
  },
  characteristics: {
    food: {
      type: [String],
      required: false,
    },
    colour: {
      type: String,
      required: false,
    },
    isDangerous: {
      type: Boolean,
      required: false,
      default: false,
    },
    weight: {
      type: Number,
      required: false,
      min: 0,
    },
    enclosure: {
      type: String,
      enum: [
        "mountain",
        "ice",
        "water",
        "jungle",
        "desert",
        "savana",
        "ocean",
        "rainforest",
      ],
      required: true,
    },
  },
  zookeeper: {
    type: Schema.Types.ObjectId,
    ref: "Zookeeper",
    required: true,
  },
});

const Animal = model("Animal", animalSchema);

export default Animal;

// name - is required, can't be less than 2 carachters
// age - is required, negative numbers are not allowed
// location - is required
// gender - is required, has to be either 'M' or 'F'
// characteristics - is required
//     food - not required
//     colour - not required
//     isDangerous - not required, default value is false
//     weight - not required, negative numbers are not allowed
//     enclosure - required
