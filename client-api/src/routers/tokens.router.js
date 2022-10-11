const express = require('express');
const router =  express.Router();

const {verifyRefreshJWT} = require("../helpers/jwt.helper")
const {getUserByEmail} = require("../model/user/User.model")
// returning refresh jwt
router.get("/", async (req, res, next) => {
    const {authorization} = req.headers;

    const decoded = await verifyRefreshJWT(authorization)
    if(decoded.email) {
        const userProf = await getUserByEmail(decoded.email);
        if(userProf._id){
            res.status(403).json({message: userProf});
        }

    }
    res.status(403).json({message: 'Forbidden'});
})

module.exports = router;