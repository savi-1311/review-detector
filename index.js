const express = require("express")
const router = express.Router()
const fs = require('fs');

router.post("/check", (req, res) => {
	const {entry} = req.body;
	var positive = new Array();
var negative = new Array();
var positive_data;
var negative_data;
try {  
    positive_data = fs.readFileSync('positive_words.txt', 'utf8');
    negative_data = fs.readFileSync('negative_words.txt', 'utf8');   
} catch(e) {
    console.log('Error:', e.stack);
}
positive = positive_data.split(/\n|\r/g);
positive.pop();
negative = negative_data.split(/\n|\r/g);
negative.pop();
var string = entry.toLowerCase();
var final;
let resultn = negative.some(o => string.includes(o));
let resultp = positive.some(o => string.includes(o));
if(resultn)
{
	final = 'Negative Review';
}
else if(resultp)
{
	final = 'Positive Review';
}
else
final = 'Neutral Review';

res.render("check",{final:final , entry:entry});
});
module.exports = router

