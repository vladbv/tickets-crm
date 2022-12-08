const express = require("express")
const {route} = require("./ticket.router");
const router = express.Router()

const {insertUser, getUserByEmail, getUserById, updatePassword} = require('../model/user/User.model');
const {hashPassword, comparePassword} = require('../helpers/bcrypt.helper');
const {createAccessJWT, createRefreshJWT} = require('../helpers/jwt.helper');
const {userAuthorization} = require('../middleware/authorization.middleware');
const { setPasswordRestPin, getPinByEmailPin, deletePin} = require("../model/reset-pin/resetPin.model");
const { emailProcessor } = require("../helpers/email.helper");


router.all('/',  (req, res, next) => { 
//res.json({message: "return form user router"})
next();
});

router.get('/', userAuthorization, async (req, res) => {
    
    const _id = req.userId
    
    const userProf = await getUserById(_id)

    res.json({user: userProf})
})


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

router.post("/login", async (req, res) => {
	console.log(req.body);

	const { email, password } = req.body;

	if (!email || !password) {
		return res.json({ status: "error", message: "Invalid form submition!" });
	}

	const user = await getUserByEmail(email);


	const passFromDb = user && user._id ? user.password : null;

	if (!passFromDb)
		return res.json({ status: "error", message: "Invalid email or password!" });

	const result = await comparePassword(password, passFromDb);

	if (!result) {
		return res.json({ status: "error", message: "Invalid email or password!" });
	}

	const accessJWT = await createAccessJWT(user.email, `${user._id}`);
	const refreshJWT = await createRefreshJWT(user.email, `${user._id}`);

	res.json({
		status: "success",
		message: "Login Successfully!",
		accessJWT,
		refreshJWT,
	});
});


router.post('/reset-password', async (req, res) => {
    const {email} = req.body;
    
    const user = await getUserByEmail(email)
 
    if(user && user._id){
        const setPin = await setPasswordRestPin(email)
        await emailProcessor({email, pin: setPin.pin, type: "request-new-password" })
       
            return res.json({status: "success", 
            messsage: "If the email exists in our database, it will receive a pin."
        });

    }

    res.json({status: "error", 
    messsage: "The email seems to not exist in our database..."
});

});

router.patch('/reset-password', async (req, res) => {
    const {email, pin, newPassword} = req.body;

    const getPin = await getPinByEmailPin(email, pin);
        if(getPin._id){
            const dbDate = getPin.addedAt
            const expiresIn = 1
            let expDate = dbDate.setDate(dbDate.getDate() + expiresIn);

            const today = new Date();

            if(today > expDate){
                return res.json({status: 'error', message: 'Invalid or expired pin'})
            }

            // encrypt the new pass
            const hashedPass = await hashPassword(newPassword);

            const user = await updatePassword(email, hashedPass);

            if(user._id){

        // sending e-mail notification
        await emailProcessor({email,  type: "password-update-success"})
                deletePin(email, pin);

    return res.json({
        status: 'success', message: "Your password was updated",
                });
            }
        }
    res.json({status: 'error', message: "Unable to update your password"});
});

module.exports = router;
