const redis = require('redis');

const client = redis.createClient(process.env.REDIS_URL);
client.connect();
client.on('error', function(error) {
    console.log(error);
});

const setJWT = (key, value) => {
    return new Promise((resolve, reject) => {
        try{
   client.set(key, value, (err, res) => {
        if(err) reject(err)
       resolve(res);
    });   
        }
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
