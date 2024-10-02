var express = require('express');
const cors = require("cors"); // Import CORS for handling cross-origin requests

var app = express();
// Enable CORS (must after initialise it)
app.use(cors());

var fundraiserAPI = require("./controllerAPI/api-controller");// Import the fundraiser API controller

var bodyparser=require("body-parser");// Import body-parser for parsing request bodies


// Use body-parser to parse JSON bodies
app.use(bodyparser.json());
// Use body-parser to parse URL-encoded bodies
app.use(bodyparser.urlencoded({extended:false}));

// Set up the route for the fundraiser API
app.use("/api/fundraisers", fundraiserAPI);

// Start the server on port 3060
app.listen(3060);

console.log("Server up and running on port 3060");// Log server status
