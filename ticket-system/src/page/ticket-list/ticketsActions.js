import {fetchTicketSuccess, fetchTicketFail, fetchTicketLoading} from './ticketsSlice'

const fetchAllTickets = () => dispatch => {
dispatch(fetchTicketLoading())
}