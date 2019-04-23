//Create controller object with a function for get home and for get survey
const Path = require("path");
function getHome(req, res) {
  res.sendFile(Path.join(__dirname, "../public/home.html"));
}

function getSurvey(req, res) {
  res.sendFile(Path.join(__dirname, "../public/survey.html"));
}

module.exports = {
  getHome,
  getSurvey
};
