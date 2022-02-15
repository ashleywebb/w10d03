//load express
const express = require('express');

//create app
const app = express();

//variables



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
    const magicBallArray = ["It is certain", "It is decidedly so", 
"Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", 
"Most likely", "Outlook good","Yes", "Signs point to yes", 
"Reply hazy try again", "Ask again later","Better not tell you now", 
"Cannot predict now", "Concentrate and ask again","Don't count on it", 
"My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let randomNumber = Math.floor(Math.random()*magicBallArray.length)
    let question = req.params.question
    res.send(`<h1>${magicBallArray[randomNumber]}</h1>`)

})

// listening on port 3000
app.listen(3000, () => {
    console.log("listening!");
});