console.log('got hit');
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

// API security
//app.use(helmet());

// handle CORS error
app.use(cors())

// Setting up MongoDB Connection
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    
});

if(process.env.NODE_ENV !== 'production'){
const mDb = mongoose.connection;    
mDb.on("open", () => {
    console.log("MongoDB is connected")
});

mDb.on("error", (error) => {
    console.log(error);
});

// Logger
app.use(morgan('tiny'));

}

// Setting body bodyParser
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

const port = process.env.PORT || 3001

// Load routers
const userRouter = require("./src/routers/user.router")
const ticketRouter = require("./src/routers/ticket.router")

app.use("/v1/user", userRouter);
app.use("/v1/ticket", ticketRouter);

// Error handler
const handleError = require('./src/utils/errorHandler')

app.use( (req, res, next) => {
    const error = new Error('Resource is not found')
    error.status = 404;
    next(error)
})
app.use((error, req, res, next) => {
handleError(error, res);
});  

app.listen(port, () => {
console.log(`API is ready on http://localhost:${port}`);
})
