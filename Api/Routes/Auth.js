const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");

//REGISTER

router.post("/register", async (req, res) => {
  let data = req.body;
  const newUser = new User({
    username: data.username,
    email: data.email,
    password: CryptoJS.AES.encrypt(
      data.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
