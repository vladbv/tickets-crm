const {TicketSchema} = require('./Ticket.schema')

const insertTicket = (ticketObj) => {
        return new Promise((resolve, reject) => {
            try {
                TicketSchema(ticketObj)
                .save()
                .then(data => 
                    resolve(data))
                .catch(error => reject(error))
            }
            catch(err){
        
            }
      
        })
    }

    const getTickets = (clientId) => {
        return new Promise((resolve, reject) => {
            try {
                TicketSchema
                .findOne({clientId})
                .then(data => 
                    resolve(data))
                .catch(error => reject(error))
            }
            catch(err){
        
            }
      
        })
    }

       const getTicketById = (_id, clientId) => {
        return new Promise((resolve, reject) => {
            try {
                TicketSchema
                .find({_id, clientId})
                .then(data => 
                    resolve(data))
                .catch(error => reject(error))
            }
            catch(err){
        
            }
      
        })
    }


    module.exports = {
        insertTicket,
        getTickets
    }