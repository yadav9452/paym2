const express = require("express");
const Coupon = require("../models/coupon.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const coupon = await Coupon.create(req.body);
    res.send(coupon);
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/:name", async (req, res) => {     //working in postman
  try {
    let name = req.params.name.trim();
    const coupon = await Coupon.find({ name: name }).lean().exec();
    // console.log(req.params.name);
    // const coupons = await Coupon.find().lean().exec();
    // console.log(coupons);
    res.send(coupon);
  } catch (error) {
    res.send({ message: error.message });
  }
});
router.get("", async (req, res) => {
  try {
    // let name = req.params.name.trim();
    // console.log(req.query.q, "id");
    const coupon = await Coupon.find({}).lean().exec();   // changed 

    // console.log(coupons);
    res.send(coupon);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
