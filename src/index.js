const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./../swagger_output.json')
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Connected to database'));

app.use(cors())
app.use(express.json());
app.use(routes)
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3333, () => console.log("Server running"))