const express = require('express');
const bodyParser = require('body-parser');
const requestmanager = require('./middleware/requestmanager');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/*',requestmanager)
app.listen(3000,()=>{
    console.log('listening on http://localhost:3000');
})