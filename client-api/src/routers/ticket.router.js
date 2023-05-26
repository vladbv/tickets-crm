const express = require('express');
const router = express.Router();
const {insertTicket, getTicketById, getTickets, updateTicketById, updateStatusClose, deleteTicket} = require('../model/ticket/Ticket.model')
const {userAuthorization} = require('../middleware/authorization.middleware')
const {createNewTicketValidation} = require('../middleware/formValidation.middleware')

router.all('/', (req, res, next) => {
// res.json({message: "return form ticket router"})

next();

});


router.post('/', createNewTicketValidation, userAuthorization, async (req, res) => {
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

// Getting a specific ticket
router.get('/:_id', userAuthorization, async (req, res) => {
    try{
        const { _id } = req.params; 
        const clientId = req.userId;
            const result = await getTicketById(_id, clientId)

        console.log(result)
    
        
            return res.json({ 
                status: 'success', 
                result,
            })
      
            
    } catch(error){
        res.json({status: 'error', message: error.message })
    }
      
    }); 

// updating a specific ticket
router.put('/:_id', userAuthorization, async (req, res) => {
    try{
        const {message, sender} = req.body;
        const { _id } = req.params; 
        const clientId = req.userId;

        const result = await updateTicketById({_id, message, sender});

        if(result._id) {
            return res.json({
                status: 'success',
                message: 'Your message is updated'
            })
        }

        res.json({
            status: 'error',
            message: 'Unable to update your message '
        });
            
    } catch(error){
        res.json({status: 'error', message: error.message })
    }
      
    }); 

    // close a specific ticket
router.patch('/close-ticket/:_id', userAuthorization, async (req, res) => {
    try{
        const { _id } = req.params; 
        const clientId = req.userId;

        const result = await updateStatusClose({_id, clientId});

        if(result._id) {
            return res.json({
                status: 'success',
                message: 'The ticket has been closed'
            })
        }

        res.json({
            status: 'error',
            message: 'Unable to update the ticket '
        });
            
    } catch(error){
        res.json({status: 'error', message: error.message })
    }
      
    }); 


        // close a specific ticket
router.delete('/close-ticket/:_id', userAuthorization, async (req, res) => {
    try{
        const { _id } = req.params; 
        const clientId = req.userId;


        const result = await deleteTicket({_id, clientId});
        console.log(result)

            return res.json({
                status: 'success',
                message: 'The ticket has been deleted'
            })

    } catch(error){
        res.json({status: 'error', message: error.message })
    }
      
    });



module.exports = router;
