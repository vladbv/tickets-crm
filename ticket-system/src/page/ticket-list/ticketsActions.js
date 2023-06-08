import axios from 'axios'
import {
    fetchTicketSuccess, 
    fetchTicketFail, 
    fetchTicketLoading,
    searchTickets
} from './ticketsSlice'

export const fetchAllTickets = () => async (dispatch) => {
dispatch(fetchTicketLoading())

try{

    const result = await axios.get(
        'http://localhost:3001/v1/ticket',
        { headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUyQGUuY29tMSIsImlhdCI6MTY4NjE0MzM4MCwiZXhwIjoxNjg2MjI5NzgwfQ.a3V-pZQGi3Y9AuJxW7QgAeO_1uBvSagms3kqwvo9gNk'
        }}
    )
console.log(result)
dispatch(fetchTicketSuccess(result.data.result))
}   catch(error){
    dispatch(fetchTicketFail(error.message));
}

}


export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str))
}