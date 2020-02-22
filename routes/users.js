const express = require("express");
const router = express.Router();
const User = require("../models/User");

// @route POST api/users

// @desc REGISTER a user

// @access Public
router.post("/", (req, res) => {
  res.send("Register user");
});

module.exports = router;
