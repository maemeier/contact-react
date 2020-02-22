const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

// @route POST api/users

// @desc REGISTER a user

// @access Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please use validate email").isEmail(),
    check("password", "Please enter a password with 6 or more chars").isLength({
      min: 6
    })
  ],
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
