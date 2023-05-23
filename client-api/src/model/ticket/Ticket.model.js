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
                .then((data) => 
                    resolve(data))
                .catch(error => reject(error))
            }
            catch(err){
        
            }
      
        })
    }

    const updateTicketById = ({_id, message, sender}) => {
        return new Promise((resolve, reject) => {
            try {
                TicketSchema
                .findOneAndUpdate(
                    { _id },
                { 
                    status: 'Pending operator response',
                    $push: {
                        conversations: {
                            message,
                            sender
                        }
                    },
                },
                {new: true}
                    )
                .then((data) => 
                    resolve(data))
                .catch(error => reject(error))
            }
            catch(err){
        
            }
      
        })
    }

    const updateStatusClose = ({_id, clientId}) => {
        return new Promise((resolve, reject) => {
                try{
                    TicketSchema
                    .findOneAndUpdate(
                        {_id, clientId},
                        {
                        status: 'Closed'
                        },
                        {
                            new: true
                        }
                        ).then((data) => resolve(data))
                        .catch((error) => reject(error));
                } catch(err){
                    reject(err)
                }
                
        })

    }

    const deleteTicket = ({_id, clientId}) => {
        return new Promise((resolve, reject) => {
                try{
                    TicketSchema
                    .findOneAndDelete(
                        {_id, clientId}
                        
                        ).then((data) => resolve(data))
                        .catch((error) => reject(error));
                } catch(err){
                    reject(err)
                }
                
        })

    }


    module.exports = {
        insertTicket,
        getTickets,
        getTicketById,
        updateTicketById,
        updateStatusClose,
        deleteTicket
    }