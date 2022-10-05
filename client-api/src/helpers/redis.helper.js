const redis = require('redis');

// If redis version is > 3.0, bear in mind you must use client.connect()

const client = redis.createClient(process.env.REDIS_URL);

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
        reject(error);
        } 
    });
   
}

const getJWT = (key) => {
    return new Promise((resolve, reject) => {
        try{
    client.get(key, (err, res) => {
        if(err) reject(err)
       resolve(res);
    });     }
        catch(error) {
        reject(error);
        } 
    });
   
}





module.exports = {
    setJWT,
    getJWT,  
}
