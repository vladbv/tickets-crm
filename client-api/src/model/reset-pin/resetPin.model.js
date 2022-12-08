const { token } = require("morgan");
const { randomPinNumber } = require("../../utils/randomGenerator");
const { ResetPinSchema } = require("./resetPin.schema");

const setPasswordRestPin = async (email) => {
  
  const pinLength = 6;
  const randPin = await randomPinNumber(pinLength);

  const restObj = {
    email,
    pin: randPin,
  }

  return new Promise((resolve, reject) => {
    ResetPinSchema(restObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
 
const getPinByEmailPin = (email, pin) => {
  return new Promise((resolve, reject) => {
    try{
      ResetPinSchema.findOne({email, pin}, (error, data) => {
        if(error) {
          console.log(error)
          resolve(false)
        }

        resolve(data);
      });
    } catch(err){
      reject(err);
      console.log(err)
    }
  });

};


const deletePin = (email, pin) => {
  return new Promise((resolve, reject) => {
    try{
      ResetPinSchema.findOneAndDelete({email, pin}, (error, data) => {
        if(error) {
          console.log(error)
        }

      });
    } catch(err){
      console.log(err)
    }
  });

};

module.exports = {    
 setPasswordRestPin,
 getPinByEmailPin,
 deletePin,
}
