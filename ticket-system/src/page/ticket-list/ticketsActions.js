import {
    fetchTicketSuccess, 
    fetchTicketFail, 
    fetchTicketLoading,
    searchTickets
} from './ticketsSlice'
import {getAllTickets} from '../../api/ticketApi'

export const fetchAllTickets = () => async (dispatch) => {
dispatch(fetchTicketLoading())

try{

    const result = getAllTickets();
console.log(result)
dispatch(fetchTicketSuccess(result.data.result))
}   catch(error){
    dispatch(fetchTicketFail(error.message));
}

}


export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str))
}