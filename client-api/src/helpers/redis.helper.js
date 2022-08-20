const redis = require('redis');

const client = redis.createClient();
//redis://localhost:6379

const setJWT = (key, value) => {
    return new Promise((resolve, reject) => {
        try{
   client.set("key", "value", (err, res) => {
        if(err) reject(err)
       resolve(res);
    });     }
        catch(error) {
        reject(err);
        } 
    });
   
}

const getJWT = (key, value) => {
    return new Promise((resolve, reject) => {
        try{
    client.get("key", (err, res) => {
        if(err) reject(err)
       resolve(res);
    });     }
        catch(error) {
        reject(err);
        } 
    });
   
}

module.exports = {
    setJWT,
    getJWT
}
