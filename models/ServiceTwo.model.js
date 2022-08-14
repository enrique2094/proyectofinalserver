const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const serviceSchema = new Schema({
  people: Number,
  price: Number,
  duration: String,
  place: {
    type: String,
    required: true,
    trim: true,
    minLenght: 3
  },
  time: String,
  date: Date
}
);

const Service = model("Service", serviceSchema);

module.exports = Service;
