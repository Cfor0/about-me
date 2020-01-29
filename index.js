const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express()
const config = require('./secret1');
const morgan = require('morgan')

app.use(morgan("tiny"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}

else {
    app.use(express.static(path.join(__dirname, '/client/public')));
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/public/index.html"));
    });
}

app.post('/api/form', (req, res) => {
    console.log(req.body)
    const email = config.email;
    const password = config.password
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `

        let transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            secureConnection: false,
            port: 587,
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false
            },
            auth: {
                user: email,
                pass: password
            },
            // tls: {
            //     rejectUnauthorized: false
            // }
        })

        let mailOptions = {
            from: 'port1925@outlook.com',
            to: 'port1925@outlook.com',
            replyTo: 'test@testaccount.com',
            subject: 'New Message From Portfolio',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log("Message sent: %s", info.message)
            console.log("Message URL: %s", nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})