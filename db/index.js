// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app
const username ="admin123"
const password = "kike123"
//const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/proyectofinal";
const uri = /*"mongodb://localhost/proyectofinal"*/`mongodb+srv://${username}:${password}@cluster0.v4wpnf2.mongodb.net/proyectofinal?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  }); 

