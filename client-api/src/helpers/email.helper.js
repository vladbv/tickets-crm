const nodemailer = require('nodemailer');


  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'suzanne2@ethereal.email',
        pass: 'qGtakEYNGGYtYUksdu'
    }
});

const send = (info) => {
return new Promise(async  (resolve, reject) => {
    try{


        let result = await transporter.sendMail(info);
    
        console.log("Message sent: %s", result.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
    resolve(result);
    }
    catch(err){
        console.log(err);
    }
})


    }

const emailProcessor = ({email, pin, type}) => {
    let info = '';
    switch(type) {
        case "request-new-password":
                 info = {
                from: '"CRM 👻" <foo@example.com>', // sender address
                to: email, // list of receivers
                subject: "Password reset pin", // Subject line
                text: "Here is your password reset pin " + pin + " This pin will expire in one day." , // plain text body
                html: `Here is your pin: ${pin}`, // html body
              }
              send(info);
        break;

        case "password-update-success":
            info = {
            from: '"CRM 👻" <foo@example.com>', // sender address
            to: email, // list of receivers
            subject: "Password is updated", // Subject line
            text: "Your password has been updated" , // plain text body
            html: `Your password has been updated`, // html body
          }
          send(info);
        break;
        
        default: 
        break;
    }

}

module.exports = {emailProcessor}