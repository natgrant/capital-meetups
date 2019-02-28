const express = require("express");
const db = require("../db/events");
const router = express.Router();

router.use(express.json());
