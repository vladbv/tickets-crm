const { token } = require("morgan");
const { RestPinSchema } = require("./RestPin.schema");

const setPasswordRestPin = (userObj) => {
  
  const randPin = 6252642;

  const restObj = {
    email,
    pin: randPin
  }

  return new Promise((resolve, reject) => {
    RestPinSchema(restObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
  
module.exports = {
 setPasswordRestPin,
}
