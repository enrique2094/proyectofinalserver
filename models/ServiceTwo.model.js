const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const servicesSchemaTwo = new Schema({
  people: Number,
  day: String,
  place: {
    type: String,
    required: true,
    trim: true,
    minLenght: 3
  },
}
);

const ServicesTwo = model("ServicesTwo", servicesSchemaTwo);

module.exports = ServicesTwo;
