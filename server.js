var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const { htmlRouter } = require("./app/routing/htmlRoutes");
app.use("/", htmlRouter);
require("./app/routing/apiRoutes");
app.use("", apiRouter);
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
