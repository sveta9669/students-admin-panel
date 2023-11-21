const express = require("express");
const router = require('./routes/router')
const flash = require("connect-flash")
const session = require("express-session")
const app = express();
const port = process.env.SERVER_PORT;
 
app.set("view engine", "hbs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
require('hbs').registerPartials(__dirname + '/views/component')
app.use(session({
  secret:'vs',
  resave: false,
  saveUninitialized: true

}))

app.use(flash())

app.use('/', router)
     
app.listen(port, () => {
  console.log(`Server started at port http://localhost:${process.env.SERVER_PORT}`);
});