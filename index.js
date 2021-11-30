const express = require("express");
const path = require("path");
const Store = require("./store");
const Service = require("./service");

// Initialising the app and setting the port number.
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/index.ejs"));
});

app.get("/answer/:color", (req, res) => {
  const color = req.params.color;
  const result = Store.saveSurveyResults(color);
  res.send({
    surveyResult: result,
  });
});

app.get("/results", (req, res) => {
  const results = Service.getFormattedResults(Store.getSurveyResults().results);
  res.render(path.join(__dirname, "/surveyresults.ejs"), { results: results });
});

app.get("/reset", (req, res) => {
  Store.clearSurveyResults();
  res.send({ message: "Successfully cleared the results" });
});

app.set("view engine", "ejs");

// Listening to port number 3030
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
