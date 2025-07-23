const { error } = require('console');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
console.log('EMAIL:', process.env.EMAIL_USER);

router.post('/send-message', async(req, res) => {
    var {name, email, subject, message} = req.body;

    console.log("Email stuff: ", req.body);

    try {
        console.log("Email stuff: ", req.body);

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: 'kelechiariwodo@gmail.com',
            subject: `Website Outreach from ${name} - ${subject}`,
            html: `
                <p><b>FROM: </b>${email}</p>
                <p><b>Message: </b></p>
                <p>${message}</p>
            `,
        };

        const emailResult = await transporter.sendMail(mailOptions);
        console.log("YAYYY!!! Message sent successfully! :", emailResult.messageId);
        res.status(200).json({message: 'Success!'});
    } catch (er){
        console.error('Problem in mailer, apiContacts.js: ', er);
        res.status(500).json({error: 'Failed to send message'});
    }
});

module.exports = router;