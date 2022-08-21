const jwt = require('jsonwebtoken')
const {setJWT, getJWT} = require('./redis.helper');

const createAccessJWT = async (email, _id) => {    
    try{
const accessJWT = await jwt.sign({ email },
    process.env.JWT_ACCESS_SECRET,
    {expiresIn: "15m"}); 

    await setJWT(accessJWT, _id)
return Promise.resolve(accessJWT); 
    }
    catch(err){
     return Promise.reject(err)
    }
}

const createRefreshJWT = (payload) => {    
const refreshJWT = jwt.sign({ payload }, process.env.JWT_REFRESH_SECRET,
    {
        expiresIn: "30d", 

  });

return Promise.resolve(refreshJWT); 

}

module.exports = {
    createRefreshJWT,
    createAccessJWT
}
