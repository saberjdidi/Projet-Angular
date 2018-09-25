const express = require("express");
const port = 3000;
const bodyparser = require("body-parser");
const app = express();

var authRouter = require('./server/routes/auth')
var todoRouter = require('./server/routes/todo')

//(cors) faire communication entre serveur angular et serveur backend
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyparser.json());

app.use('/auth', authRouter)
app.use('/todo', todoRouter)


app.listen(port, err => {
    console.log(`connect with ${port}`)
})