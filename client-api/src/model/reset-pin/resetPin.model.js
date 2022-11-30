const { token } = require("morgan");
const { ResetPinSchema } = require("./resetPin.schema");

const setPasswordRestPin = (email) => {
  
  const randPin = 6252642;

  const restObj = {
    email,
    pin: randPin
  }

  return new Promise((resolve, reject) => {
    ResetPinSchema(restObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
  
module.exports = {
 setPasswordRestPin,
}
