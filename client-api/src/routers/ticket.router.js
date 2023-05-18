const express = require('express');
const router = express.Router();
const {insertTicket, getTickets} = require('../model/ticket/Ticket.model')
const {userAuthorization} = require('../middleware/authorization.middleware')


router.all('/', (req, res, next) => {
// res.json({message: "return form ticket router"})

next();

});


router.post('/', userAuthorization, async (req, res) => {
try{
    const {subject, sender, message} = req.body;

    const userId = req.userId;

    console.log(req.body)

    const ticketObj = {
        clientId: '633df285ecd62dcb83982af8',
        subject,
        conversations: [
            {
                sender,
                message
            }
        ]        
    }

    const result = await insertTicket(ticketObj)
    console.log(result)
    if(result._id) {
        return res.json({ 
            status: 'success', 
            message: 'New ticket has been created'
            })
    }
    res.json({ 
        status: 'error', 
        message: 'Unable to create, please try again'
        })
} catch(error){
    res.json({status: 'error', message: error.message })
}
  
}); 

// Getting the tickets for a specific user
router.get('/', userAuthorization, async (req, res) => {
    try{
    
        const userId = req.userId;
            const result = await getTickets(userId)

        console.log(result)
    
        
            return res.json({ 
                status: 'success', 
                result,
            })
      
            
    } catch(error){
        res.json({status: 'error', message: error.message })
    }
      
    }); 

module.exports = router;
