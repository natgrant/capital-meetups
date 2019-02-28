const express = require("express");
const db = require("../db/users");
const router = express.Router();

router.use(express.json());

// GET /api/v1/users

module.exports = router;
