const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require("express-ejs-layouts");
const request = require('request-promise');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use('/', require('./index.js'));
app.get('*', (req, res) => {
res.render('landing');
});



const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
