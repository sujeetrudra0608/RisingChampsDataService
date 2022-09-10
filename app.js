const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
dotenv.config();


let routes1 = require('./routes/index')
let requestHandler = require('./m_module/requestHandler').requestHandler
let responseHandler = require('./m_module/responseHandler').responseHandler

app.use(requestHandler)

routes1.routes.forEach(route => {
    app.use(route.path, route.router)
});

mongoose.connect(process.env.DB_CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB connected!!'),
    (error) => console.log(error.message));


const port = process.env.PORT || 5000;
app.listen(port,"127.0.0.1", () => console.log(`Server up and running on port number ${port}`));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(responseHandler)