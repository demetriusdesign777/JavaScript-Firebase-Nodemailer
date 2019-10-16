const functions = require('firebase-functions');
const nodemailer = require('nodemailer');


exports.mailSender = functions.https.onCall((data, context) => {

    var user = data.email.replace(/@.+/, "");
    
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: "",
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            accessToken: process.env.accessToken
        }
    });
        
    var mailOptions = {
        from: ``,
        to: data.email,
        subject: 'Hi ' + user,
        text: "Thank you, for testing out my nodemailer. Hope you liked it."
    };
        
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent successfully');
        }
    });

})

