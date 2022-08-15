const router = require("express").Router();
const ServiceOne = require("../models/ServiceOne.model");
const mongoose = require("mongoose");

// enlistar servicios

router.get("/all", (req, res) => {
  ServiceOne.find()
    .then((allTheServices) => {
      console.log("muestra", allTheServices);
      res.json(allTheServices);
    })
    .catch(console.log());
});

// create services using post

router.post("/new", (req, res) => {
  const { place, day, time, people } = req.body;

  ServiceOne.create({ place, day, time, people })
    .then((newService) => {
      res.json(newService);
    })
    .catch((err) => console.log(err));
});

// edit using put

router.put("/editour/:Id", (req, res) => {
  const { Id } = req.params;
  ServiceOne.findByIdAndUpdate(Id, req.body)
    .then((editNewTour) => {
      res.json(editNewTour);
    })
    .catch(console.log());
});

// delete using del

router.delete("/deletetour/:Id", (req, res) => {
  const { Id } = req.params;
  ServiceOne.findByIdAndDelete(Id)
    .then((resp) => {
      res.status(200).json({ success: true, msg: "Tour Deleted" });
    })
    .catch((e) => console.log(e));
});

module.exports = router;