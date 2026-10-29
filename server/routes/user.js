const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userController = require("../controllers/userController");
const {authenticate, authorize} = require("../middleware/authentication");

router.get("/users",
    cookieParser(),
    authenticate,
    authorize('admin'),
    userController.getAllUsers
);