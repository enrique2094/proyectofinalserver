const router = require("express").Router();
const authRoutes = require("./auth.routes");
const TourRoutes = require("./serviceOne.routes")


/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Final Project");
});

router.use("/statue", TourRoutes);

router.use("/auth", authRoutes);

module.exports = router;
