var dbDetails = require("./db-details");// Import database configuration details


var mysql = require('mysql2');// Import mysql2 for database connections
var bodyParser = require('body-parser'); // Import body-parser for parsing request bodies

//var http = require('http');

module.exports = {
	// Function to get a new database connection
	getconnection: ()=>{
	return mysql.createConnection({
		host:dbDetails.host,// Database host
		user:dbDetails.user,// Database user
		password:dbDetails.password,// Database password
		database:dbDetails.database// Database name
	});
}
}
