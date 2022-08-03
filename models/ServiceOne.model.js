const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const serviceSchema = new Schema({
  people: Number,
  price: Number,
  duration: String,
  place: String,
  description: String
}
);

const Service = model("Service", serviceSchema);

module.exports = Service;
