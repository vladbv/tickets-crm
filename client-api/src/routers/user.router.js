const express = require("express")
const {route} = require("./ticket.router");
const router = express.Router()

const {insertUser, getUserByEmail} = require('../model/user/User.model');
const {hashPassword, comparePassword} = require('../helpers/bcrypt.helper');

router.all('/',  (req, res, next) => { 
//res.json({message: "return form user router"})
next();
});

// Creating a new user route
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
// User sign in Router

router.post("/login", async(req, res) => {
    console.log(req.body)
    const {email, password} = req.body;
    // get user with email from db
    // hash our password  and compare with the db one
    if(!email || !password) {
   return res.json({status: "invalid", message: "Inable to login"})
    }
    const user = await getUserByEmail(email)
    console.log(user)
    const passFromDb = user && user._id ? user.password : null
    if(!passFromDb)  return res.json({ status: "error", message: "Invalid email or password!"})
    const result = await comparePassword(password, passFromDb)
    console.log(result)
    res.json({ status: "success", message: "Logged in successfully"})
});

module.exports = router;
