const express = require('express');
const app = express();

//read strings sent from server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/webdev');
const url = "mongodb+srv://Catherina:Aa123456@cluster0.gcj01.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)
})

db.on('error', err => {
    console.error('connection error:', err)
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

require('./services/movies-service')(app);

require('./services/tweeter-service')(app);

require('./services/profile-service')(app);

require('./movies/service')(app);

require('./tweets/tweet-service')(app);

require('./who/who-service')(app);

require('./profile/profile-service')(app);

let port = process.env.PORT || 4000;
app.listen(port);

