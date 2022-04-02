const express = require("express");
const Fashion = require("../models/fashion.models");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const fashion = await Fashion.create(req.body);
    res.send(fashion);
  } catch (error) {
    res.send({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    console.log("brand", req.query.brand);
    // console.log("b", req.query.brand);
    const fashions = await Fashion.findAll(req.query.q).lean().exec();
    res.send(fashions);
  } catch (error) {
    res.send({ message: error.message });
  }
});   
router.get("", async (req, res) => {   //working
  try {
    const fashions = await Fashion.find({}).lean().exec();
    res.send(fashions);
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/:name", async (req, res) => {         
  try {
    const fashions = await Fashion.find({ name: req.params.name })
      .lean()
      .exec();
    res.send(fashions);
  } catch (error) {
    res.send({ message: error.message });
  }
});


module.exports = router;
