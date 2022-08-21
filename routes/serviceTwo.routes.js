const router = require("express").Router();
const ServicesTwo = require("../models/ServiceTwo.model");
const mongoose = require("mongoose");

// listing servicios

router.get("/allTwo", (req, res) => {
  ServicesTwo.find()
    .then((allTheServices) => {
      console.log("show", allTheServices);
      res.json(allTheServices);
    })
    .catch(console.log());
});

// create services using post

router.post("/newTwo", (req, res) => {
  const { place, people, day } = req.body;

  ServicesTwo.create({ place, people, day })
    .then((newService) => {
      res.json(newService);
    })
    .catch((err) => console.log(err));
});

// edit using put

router.put("/editourTwo/:Id", (req, res) => {
  const { Id } = req.params;
  ServicesTwo.findByIdAndUpdate(Id, req.body)
    .then((editNewTour) => {
      res.json(editNewTour);
    })
    .catch(console.log());
});

// delete using del

router.delete("/deletetourTwo/:Id", (req, res) => {
  const { Id } = req.params;
  ServicesTwo.findByIdAndDelete(Id)
    .then((resp) => {
      res.status(200).json({ success: true, msg: "Tour Deleted" });
    })
    .catch((e) => console.log(e));
});

module.exports = router;