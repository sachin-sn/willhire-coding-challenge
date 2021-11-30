/**
 * CREATING A FILE TO STORE VALUE IN SERVER.
 * THIS IS A REPLACEMENT FOR DB STORE
 * THE APPROACH I AM TAKING IS SAVING THE DATA ON JSON FILE INSTEAD OF DB
 */

/**
 * Assuming survey is anonymous, we are just storing the results from the survey
 */

const fs = require("fs");
const path = require("path");
const surveyResultFilePath = path.join(__dirname, "/surveyResult.json");

module.exports = {
  // Save results to JSON file
  saveSurveyResults: (value) => {
    let surveyResult = JSON.parse(fs.readFileSync(surveyResultFilePath));
    const { results } = surveyResult;
    surveyResult = {
      results: [...results, value],
    };
    fs.writeFileSync(surveyResultFilePath, JSON.stringify(surveyResult));
    return surveyResult;
  },
  // Get results from JSON file
  getSurveyResults: () => {
    return JSON.parse(fs.readFileSync(surveyResultFilePath));
  },
  // Reset results in JSON file
  clearSurveyResults: () => {
    surveyResult = {
      results: [],
    };
    fs.writeFileSync(surveyResultFilePath, JSON.stringify(surveyResult));
    return surveyResult;
  },
};
