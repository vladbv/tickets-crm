import axios from 'axios'
import {fetchTicketSuccess, fetchTicketFail, fetchTicketLoading} from './ticketsSlice'

export const fetchAllTickets = () => async (dispatch) => {
dispatch(fetchTicketLoading())

try{

    const result = await axios.get(
        'http://localhost:3001/v1/ticket',
        { headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUyQGUuY29tMSIsImlhdCI6MTY4NTUyNzYxMCwiZXhwIjoxNjg1NjE0MDEwfQ.OHvSg5uxG_FyOxhSVvh_JfPgMegstlQARGzee_8njP0'
        }}
    )
console.log(result)
dispatch(fetchTicketSuccess())
}   catch(error){
    dispatch(fetchTicketFail(error.message));
}

}