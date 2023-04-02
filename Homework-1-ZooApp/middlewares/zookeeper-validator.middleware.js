import Joi from "joi";

const zookeeperSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required().min(18),
  // NOTE: I made this a RegEx pattern is it must include the City, Country format in order to work.
  location: Joi.string()
    .pattern(/^[a-zA-Z\s]+,\s[a-zA-Z\s]+$/)
    .required(),
  isActive: Joi.boolean().required(),
});

const zookeeperValidator = (req, res, next) => {
  const zookeeperData = req.body;
  const validate = zookeeperSchema.validate(zookeeperData);

  if (validate?.error) {
    res.status(400).send(validate?.error?.details[0]?.message);
  } else {
    next();
  }
};

export default zookeeperValidator;

// id - the unique identifier for each zookeeper - string;
// name - first and last name of each employee - string;
// age - his/her age - number;
// location - city and country where the zoo s/he is working at is located - string;
// isActive: if the employee is actively working or not - boolean
