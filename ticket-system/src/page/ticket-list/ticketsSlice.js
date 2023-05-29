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
        fetchTicketLoading:(state) => {
            state.isLoading = true
        },
        fetchTicketSuccess: (state, action) => {
                state.isLoading = false
                state.tickets = action.payload
        },
        fetchTicketFail: (state, action) => {
            state.isLoading = action.payload
            state.tickets = action.payload
        },
    }
})