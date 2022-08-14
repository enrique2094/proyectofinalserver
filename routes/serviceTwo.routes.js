const router = require("express").Router();
const ServiceTwo = require("../models/ServiceTwo.model");
const mongoose = require("mongoose");

// enlistar servicios

router.get("/all", (req, res) => {
  ServiceTwo.find()
    .then((allTheServices) => {
      console.log("show", allTheServices);
      res.json(allTheServices);
    })
    .catch(console.log());
});

// create services using post

router.post("/new", (req, res) => {
  const { place, description, people, price, duration, date, time } = req.body;

  ServiceTwo.create({ place, description, people, price, duration, date, time })
    .then((newService) => {
      res.json(newService);
    })
    .catch((err) => console.log(err));
});

// edit using put

router.put("/editour/:Id", (req, res) => {
  const { Id } = req.params;
  ServiceTwo.findByIdAndUpdate(Id, req.body)
    .then((editNewTour) => {
      res.json(editNewTour);
    })
    .catch(console.log());
});

// delete using del

router.delete("/deletetour/:Id", (req, res) => {
  const { Id } = req.params;
  ServiceTwo.findByIdAndDelete(Id)
    .then((resp) => {
      res.status(200).json({ success: true, msg: "Tour Deleted" });
    })
    .catch((e) => console.log(e));
});

module.exports = router;