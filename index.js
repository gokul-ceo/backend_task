const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*',(req,res)=>{
    const params = req.params[0].split('/');
    console.log(`Params received: ${params}`);
    console.log(`length of the params: ${params.length}`);
    params.forEach(element => {
        console.log(`${element}`) 
    });
    res.sendStatus(200);
})
app.listen(3000,()=>{
    console.log('listening on http://localhost:3000');
})