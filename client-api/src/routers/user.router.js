const express = require("express")
const {route} = require("./ticket.router");
const router = express.Router()

const {insertUser} = require('../model/user/User.model');

router.all('/',  (req, res, next) => { 
//res.json({message: "return form user router"})
next();
});

router.post('/', async (req, res) => {
    console.log(req.body);

    const result = await insertUser(req.body)
    console.log(result)
    res.json({message: 'New user created', result});
});
module.exports = router;
