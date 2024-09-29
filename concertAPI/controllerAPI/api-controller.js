var dbcon = require("../crowdfunding_db");

var connection = dbcon.getconnection();

connection.connect();

var express = require('express');

var router = express.Router();

router.get("/fundraiser", (req, res)=>{
	connection.query("select * from FUNDRAISER", (err, records,fields)=> {
		 if (err){
			 console.error("Error while retrieve the data");
		 }else{
			 res.send(records);
		 }
	})
})

router.get("/category", (req, res)=>{
	connection.query("select * from CATEGORY", (err, records,fields)=> {
		 if (err){
			 console.error("Error while retrieve the data");
		 }else{
			 res.send(records);
		 }
	})
})


// router.get("/:id", (req, res)=>{
// 	connection.query("select * from concert where ConcertID=" + req.params.id, (err, records,fields)=> {
// 		 if (err){
// 			 console.error("Error while retrieve the data");
// 		 }else{
// 			 res.send(records);
// 		 }
// 	})
// })



module.exports = router;
