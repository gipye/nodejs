"use strict";

// router setting
const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl.js");

router.get("/", ctrl.view.home);
router.get("/login", ctrl.view.login);
router.post("/login", ctrl.process.login);

// make module
module.exports = router;
