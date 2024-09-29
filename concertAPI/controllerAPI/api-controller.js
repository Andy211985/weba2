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

router.get("/search", (req, res) => {
    const { organizer, city, category } = req.query;
    let query = `
        SELECT f.*, c.NAME AS CATEGORY_NAME
        FROM FUNDRAISER f
        JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
        WHERE f.ACTIVE = true
    `;
    const params = [];

    if (organizer) {
        query += ' AND f.ORGANIZER LIKE ?';
        params.push(`%${organizer}%`);
    }

    if (city) {
        query += ' AND f.CITY LIKE ?';
        params.push(`%${city}%`);
    }

    if (category) {
        query += ' AND c.NAME LIKE ?';
        params.push(`%${category}%`);
    }

    connection.query(query, params, (err, records, fields) => {
        if (err) {
            console.error("Error while searching fundraisers:", err);
            res.status(500).json({ error: 'An error occurred while searching fundraisers' });
        } else {
            res.json(records);
        }
    });
});




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
