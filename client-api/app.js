console.log('got hit');

const express = require('express');
const app = express();

const port = process.env.PORT || 3001

app.use('/', (req, res) => {
res.json({message: 'Test'});
})

app.listen(port, () => {
console.log(`API is ready on http://localhost:${port}`);
})
