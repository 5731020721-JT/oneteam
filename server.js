// var express = require('express');
// var app = express();

// // set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 8080;

// // set the view engine to ejs
// app.set('view engine', 'ejs');

// // make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));

// // set the home page route
// app.get('/', function(req, res) {

// 	// ejs render automatically looks in the views folder
// 	res.render('index');
// });

// app.listen(port, function() {
// 	console.log('Our app is running on http://localhost:' + port);
// });

// const product = require('./db')

// app.get('/Product', (req, res) => {
//   res.json(product)
// })


// app.get('/Product/:id', (req, res) => {
//     res.json(product.find(product => product.item_code === req.params.id))
//   })

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', db.getProd);
app.get('/product/:id', db.getProdById)
app.get('/product2/:id', db.getProdById2)

  
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

