'use strict';
const nodemailer = require('nodemailer');
var main = async ()=>{
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'gussie.kessler@ethereal.email', // generated ethereal user
            pass: 'hzneSBJ8EqNyP1X6qw' // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"divine" <divinexyz@gmail.com>', // sender address
        to: 'divinexyz@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
        attachments: [
            {   // utf-8 string as an attachment
                filename: 'pic1.jpg',
                path: '/absolute/path/to/imagefile/pic1.jpg'
            },
        ]
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main()