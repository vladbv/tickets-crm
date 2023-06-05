import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tickets: [],
    isLoading: false,
    error: ''
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

                state.isLoading = false;
        },
        fetchTicketFail: (state, {payload}) => {
            state.isLoading = false;
            state.tickets = payload;
        },
    }
})

const {reducer, actions} = ticketListsSlice;


export const {
fetchTicketFail,
fetchTicketLoading,
fetchTicketSuccess
} = actions;
export default reducer;