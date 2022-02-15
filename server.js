//load express
const express = require('express');

//create app
const app = express();


//root route
app.get('/greeting/:name', (req, res) => {
    let name = req.params.name
    res.send(`<h1>Hi ${name}!<h1>`)
})

// listening on port 3000
app.listen(3000, () => {
    console.log("listening!");
});