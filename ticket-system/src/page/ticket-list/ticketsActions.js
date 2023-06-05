import axios from 'axios'
import {
    fetchTicketSuccess, 
    fetchTicketFail, 
    fetchTicketLoading } from './ticketsSlice'

export const fetchAllTickets = () => async (dispatch) => {
dispatch(fetchTicketLoading())

try{

    const result = await axios.get(
        'http://localhost:3001/v1/ticket',
        { headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUyQGUuY29tMSIsImlhdCI6MTY4NTk5MjY2MiwiZXhwIjoxNjg2MDc5MDYyfQ.SoRMajPRAxT2QTbtZ8spPutetJFejMyrmqKj-_r70xw'
        }}
    )
console.log(result)
dispatch(fetchTicketSuccess(result.data.result))
}   catch(error){
    dispatch(fetchTicketFail(error.message));
}

}