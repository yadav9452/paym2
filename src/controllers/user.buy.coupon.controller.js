const express = require("express");
const router = express.Router();
const userBuyCoupon = require("../models/user.buy.coupon.model");

router.post("/", async (req, res) => {
  try {
    let coupon = await userBuyCoupon.create(req.body);
    // console.log(coupon);
    res.send(coupon);
  } catch (error) {
    res.send({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    let coupon = await userBuyCoupon
      .find({ userId: req.params.id })
      .lean()
      .exec();
    res.send(coupon);
  } catch (error) {
    res.send({ message: error.message });
  }
});
router.get("", async (req, res) => {
  try {
    let coupon = await userBuyCoupon
      .find({})
      .lean()
      .exec();
    res.send(coupon);
  } catch (error) {
    res.send({ message: error.message });
  }
});
module.exports = router;
