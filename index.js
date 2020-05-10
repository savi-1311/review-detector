const express = require("express")
const router = express.Router()
const fs = require('fs');

router.post("/check", (req, res) => {
	const {entry} = req.body;
	var positive = new Array();
var negative = new Array();
var positive_data;
var negative_data;
var pos_count =0;
var neg_count = 0;
var neu_count = 0;
var array_entry = new Array();
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
array_entry = string.split('\n');
var final = new Array();

for(i=0; i<array_entry.length;i++)
{
let resultn = negative.some(o => array_entry[i].includes(o));
let resultp = positive.some(o => array_entry[i].includes(o));
if(resultn)
{
	final[i] = 'Negative Review';
	neg_count++;
}
else if(resultp)
{
	final[i] = 'Positive Review';
	pos_count++;
}
else
{
final[i] = 'Neutral Review';
neu_count++;
}
}

res.render("check",{final:final , entry:array_entry , pos : pos_count , neg : neg_count , neu : neu_count});
});
module.exports = router

