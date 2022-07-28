const express = require("express")
const {route} = require("./ticket.router");
const router = express.Router()

const {insertUser} = require('../model/user/User.model');
const {hashPassword} = require('../helpers/bcrypt.helper');

router.all('/',  (req, res, next) => { 
//res.json({message: "return form user router"})
next();
});

router.post('/', async (req, res) => {
    const {name, company, address, phone, email, password} = req.body
    try{

        // hashing password
        const hashedPass = await hashPassword(password)
  console.log(req.body);

        const newUserObj = {
            name,
            company,
            address,
            phone,
            email,
            password: hashedPass,
        }

    const result = await insertUser(newUserObj)
    console.log(result)
    res.json({message: 'New user created', result });
    } catch(error){
        console.log(error);
        res.json({ status: 'error',  message: error.message})
    }
  });
module.exports = router;
