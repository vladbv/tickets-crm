const express = require('express');
const router =  express.Router();

const {verifyRefreshJWT, createRefreshJWT} = require("../helpers/jwt.helper")
const {getUserByEmail} = require("../model/user/User.model")
// returning refresh jwt
router.get("/", async (req, res, next) => {
    const {authorization} = req.headers;

    const decoded = await verifyRefreshJWT(authorization)
    if(decoded.email) {
        const userProf = await getUserByEmail(decoded.email);
        if(userProf._id){
            res.status(403).json({message: userProf});
            let tokenExp = userProf.refreshJWT.addedAt;
            tokenExp = tokenExp.setDate(
                tokenExp.getDate() + +process.env.JWT_REFRESH_SECRET_EXP_DAY
                )
            
            console.log(new Date(tokenExp))
        
        const today = new Date();
            if(tokenExp < today){
                res.status(403).json({message: "Forbidden"})
            }
            const accessJWT  = await createRefreshJWT(decoded.email, userProf._id)
            res.json({status: "success", accessJWT})
        }
        

    }
res.status(403).json({message:"Forbidden"})
})

module.exports = router;