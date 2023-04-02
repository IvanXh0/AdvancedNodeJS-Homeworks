import Joi from "joi";

const animalSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  age: Joi.number().required(),
  // NOTE: I made this a RegEx pattern is it must include the City, Country format in order to work.
  location: Joi.string()
    .pattern(/^[a-zA-Z\s]+,\s[a-zA-Z\s]+$/)
    .required(),
  gender: Joi.string().required(),
  characteristics: Joi.object({
    food: Joi.array().items(Joi.string()).required(),
    colour: Joi.string().required(),
    isDangerous: Joi.boolean().required(),
    weight: Joi.number().required(),
    enclosure: Joi.string()
      .valid(
        "mountain",
        "ice",
        "water",
        "jungle",
        "desert",
        "savana",
        "ocean",
        "rainforest"
      )
      .required(),
  }),
});

const animalValidator = (req, res, next) => {
  const animalData = req.body;
  const validate = animalSchema.validate(animalData);

  if (validate?.error) {
    res.status(400).send(validate?.error?.details[0]?.message);
  } else {
    next();
  }
};

export default animalValidator;

// id - the unique identifier for each animal - string;
// name - name of each animal - string;
// age - its age - number;
// location - city and country where the animal is located at - string;
// gender - gender of the animal - string;
// characteristics - all characteristics about this animal - object
//     food - types of food the animal is fed - array of strings
//     colour - animals colour - string
//     isDangerous - self-explanatory, an answer to the question "will I die trying to fight it?" - boolean
//     weight - how much the animal weights - number
//     enclosure - in which type of enclosure within the zoo the animal is living in (ex. mountain, ice, water, etc.) - "mountain"
