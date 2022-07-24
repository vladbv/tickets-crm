console.log('got hit');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

// API security
app.use(helmet());

// handle CORS error
app.use(cors())

// Logger
app.use(morgan('tiny'));

// Setting body bodyParser
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

const port = process.env.PORT || 3001

app.use('/', (req, res) => {
res.json({message: 'Test!'});
})

app.listen(port, () => {
console.log(`API is ready on http://localhost:${port}`);
})
