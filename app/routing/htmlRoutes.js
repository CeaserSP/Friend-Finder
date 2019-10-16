// A GET Route to /survey which should display the survey page
// A default, catch-all route that leads to home.html which displays the home page
var path = require("path");
// Displays survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
//   Catch all route that displays home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });