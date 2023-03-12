const express = require('express');
const router = express.Router();

router.all('/', (req, res, next) => {
// res.json({message: "return form ticket router"})

next();

});


router.post('/', (req, res) => {

    const {subject, sender, message} = req.body;

    console.log(req.body)

    res.json({message: 'Ticket created'})
}); 

module.exports = router;
