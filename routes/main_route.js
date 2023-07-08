const Router = require("express").Router();

const { main } = require("../controller/main_controller");

Router.route("").get(main);

module.exports = Router;
