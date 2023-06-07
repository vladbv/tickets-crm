import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tickets: [],
    isLoading: false,
    error: '',
    searchTicketList: [],
}

const ticketListsSlice = createSlice({
    name: 'ticketLists',
    initialState,
    reducers: {
        fetchTicketLoading: (state) => {
            state.isLoading = true;
        },
        fetchTicketSuccess: (state, action) => {
                state.tickets = action.payload
                state.searchTicketList = action.payload
                state.isLoading = false;
        },
        fetchTicketFail: (state, {payload}) => {
            state.isLoading = false;
            state.tickets = payload;
        },
        searchTickets: (state, {payload}) => {
            state.searchTicketList = state.tickets.filter(row => {
                if(!payload) return row
                return row.subject.toLowerCase().includes(payload.toLowerCase())
            })
        }
    }
})

const {reducer, actions} = ticketListsSlice;


export const {
fetchTicketFail,
fetchTicketLoading,
fetchTicketSuccess,
searchTickets
} = actions;
export default reducer;