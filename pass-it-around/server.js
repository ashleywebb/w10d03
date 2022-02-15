//load express
const express = require('express');

//create app
const app = express();


// routes
app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1><a href="/bottles/98">
        take one down, pass it around</a>`)
})

app.get('/bottles/:numberOfBottles', (req, res) => {
    let numberBottles = req.params.numberOfBottles
    if (numberBottles === '0') {
        res.send(`<h1>No more bottles!</h1><a href ="/">Go Home</a>`)
    } else {
        res.send(`<h1>${numberBottles} bottles of beer on the wall</h1><a href="/bottles/${numberBottles -=1}">
        take one down, pass it around</a>`)
    }
})

// listening on port 3000
app.listen(3000, () => {
    console.log("listening!");
});