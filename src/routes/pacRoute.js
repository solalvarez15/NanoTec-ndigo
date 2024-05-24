const express = require("express");
const pacController = require("../controllers/pacController")
const pacRouter = express.Router();
pacRouter.route("/insert").post(pacController.insert);
pacRouter.route("/read").post(pacController.read);
pacRouter.route("/delete").post(pacController.remove);
pacRouter.route("/update").post(pacController.update);

module.exports = pacRouter;