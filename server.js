// Require Libraries
const dotenv = require('dotenv').config();
const express = require('express');
const https = require('https');
const exphbs  = require('express-handlebars');
const app = express()
const port = 3000

// App Setup
const app = express();


// Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// DATABASE
require('./data/reddit-db');


const checkAuth = require('./middleware/checkAuth');


require('./routes/posts')(app);
require('./routes/comments.js')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
