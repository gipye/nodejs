"use strict";

// router setting
const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl.js");

// home page
router.get("/", ctrl.view.home);

// login page
router.get("/login", ctrl.view.login);
router.post("/login", ctrl.process.login);

// register page
router.get("/register", ctrl.view.register);
router.post("/register", ctrl.process.register);

// make module
module.exports = router;
