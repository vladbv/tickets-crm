const jwt = require("jsonwebtoken");
const { setJWT, getJWT } = require("./redis.helper");
const { storeUserRefreshJWT } = require("../model/user/User.model");
const { token } = require("morgan");

const createAccessJWT = async (email, _id) => {
  try {
    const accessJWT = await jwt.sign({ email }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "1d",
    });

    await setJWT(accessJWT, _id);

    return Promise.resolve(accessJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const createRefreshJWT = async (email, _id) => {
  try {
    const refreshJWT = jwt.sign({ email }, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });

    await storeUserRefreshJWT(_id, refreshJWT);

    return Promise.resolve(refreshJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const verifyAccessJWT = (userJWT) => {
    try{
        return Promise.resolve(jwt.verify(userJWT, process.env.JWT_ACCESS_SECRET))
      
    } catch (err) {
      return Promise.resolve(err)
    }
}


const verifyRefreshJWT = (userJWT) => {
  try{
      return Promise.resolve(jwt.verify(userJWT, process.env.JWT_REFRESH_SECRET))
    
  } catch (err) {
    return Promise.resolve(err)
  }
}

module.exports = {
    createRefreshJWT,
    createAccessJWT,
    verifyAccessJWT,
    verifyRefreshJWT,
}
