/* const router = require ("express").Router()
const ServiceTwo = require ("../models/ServiceTwo.model") 
const mongoose = require ("mongoose")

// enlistar servicios

router.get("/empire", (req, res) => {
    ServiceTwo.find()
    .then(services => {res.json(services)})
    .catch((err) => console.log(err))
}) */