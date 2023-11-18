const express = require("express");
const router = require('./router/router')
var flash = require('express-flash');
var session = require('express-session');


const app = express();
const port = 3000;

app.set("view engine", "hbs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
require('hbs').registerPartials(__dirname + '/views/component')

app.use(session({ 
  cookie: { maxAge: 60000 },
  store: new session.MemoryStore,
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret'
}))

app.use(flash())
app.use('/', router)



     
app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});