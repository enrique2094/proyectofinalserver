const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const serviceSchema = new Schema({
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

const Service = model("Service", serviceSchema);

module.exports = Service;
