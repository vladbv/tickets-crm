    const {verifyAccessJWT} = require('../helpers/jwt.helper')
const userAuthorization = (req, res, next) => {
    const {authorization} = req.headers;


    // Verifying if jwt is valid
    // Checking if jwt exists in redis
    // extracting user id
    // getting user profile based on the user id
    const decoded = verifyAccessJWT(authorization)
    res.status(403).json({message: "Forbidden"})

    next();

}

module.exports = {
    userAuthorization,
};