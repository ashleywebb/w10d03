//load express
const express = require('express');

//create app
const app = express();


//root route
app.get('/greeting/:name', (req, res) => {
    let name = req.params.name
    res.send(`<h1>Hi ${name}!<h1>`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = req.params.total
    let tipPercentage = (req.params.tipPercentage)/100
    let tipEnd = tip * tipPercentage
    res.send(`<h1>Your tip is $${tipEnd}.</h1>`)
})

app.get('/magic/:question', (req, res) => {
    
})

// listening on port 3000
app.listen(3000, () => {
    console.log("listening!");
});