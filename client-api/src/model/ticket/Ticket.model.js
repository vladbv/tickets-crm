const {TicketSchema} = require('./Ticket.schema')

const insertTicket = ticketObj => {
        return new Promise((resolve, reject) => {
            try {
                TicketSchema.save(ticketObj)
                .then(data => {
                    resolve(data)
                })
                .catch(error => reject(error))
            }
            catch(err){
        
            }
      
        })
    }

    module.exports = {
        insertTicket,
    }