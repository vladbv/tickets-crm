const { token } = require("morgan");
const { UserSchema } = require("./User.schema");

const insertUser = (userObj) => {
  return new Promise((resolve, reject) => {
    UserSchema(userObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const getUserById = (_id) => {
    return new Promise((resolve, reject) => {
      if (!_id) return false;
  
      try {
        UserSchema.findOne({ _id }, (error, data) => {
          if (error) {
            console.log(error);
            reject(error);
          }
          resolve(data);
        });
      } catch (error) {
        reject(error);
      }
    });
  };
  
  const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
      if (!email) return false;
  
      try {
        UserSchema.findOne({ email }, (error, data) => {
          if (error) {
            console.log(error);
            reject(error);
          }
          resolve(data);
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const storeUserRefreshJWT = (_id, token) => {
    return new Promise((resolve, reject) => {
      try {
        UserSchema.findOneAndUpdate(
          { _id },
          {
        "refreshJWT.token": token, "refreshJWT.addedAt": Date.now()
          },
          { new: true }
        )
          .then((data) => resolve(data))
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };
  
  const updatePassword = (email, newHashedPass) => {
    return new Promise((resolve, reject) => {
      try {
        UserSchema.findOneAndUpdate(
          { email },
          {
            $set: {password: newHashedPass}
          },
          { new: true }
        )
          .then((data) => resolve(data))
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      } catch (error) {
        console.log(error);
        reject(error);
      } 
    })
  }

module.exports = {
    insertUser,
    getUserByEmail,
    getUserById, 
    storeUserRefreshJWT,
    updatePassword,
}
