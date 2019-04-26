var express = require("express");
var path = require("path")

var app = express();
var PORT = 3000;

//Sets up the Express app to handle parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoutes = require("./app/routing/htmlRoutes");
htmlRoutes(app)

var apiRoutes = require("./app/routing/apiRoutes");
apiRoutes(app);

app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});
