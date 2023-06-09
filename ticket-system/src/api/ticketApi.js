import axios from 'axios'

export const getAllTickets = () => {

return new Promise( async (resolve, reject) => {


    try{
    const result = await axios.get(
        'http://localhost:3001/v1/ticket',
        { 
            headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUyQGUuY29tMSIsImlhdCI6MTY4NjE0MzM4MCwiZXhwIjoxNjg2MjI5NzgwfQ.a3V-pZQGi3Y9AuJxW7QgAeO_1uBvSagms3kqwvo9gNk'
        },
    })
    resolve(result)
}
catch(err){
    reject(err)
}
})
}
