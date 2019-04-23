var htmlRouter = require("express").Router();

var { getHome, getSurvey } = require("../controller/htmlcontroller");
htmlRouter.route("/").get(getHome);

htmlRouter.route("/survey").get(getSurvey);

module.exports = { htmlRouter };
