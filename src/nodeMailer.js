const express = require('express');
let router = express.Router();
const nodeMailer = require('nodemailer');
const cors = require('cors');

require("dotenv").config({
  path: `.env`,
});


let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    // secure: false,
    auth: {
        type: "OAuth2",
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS,
        clientId: "479680539531-htsg4at8ue4t23abd56m7nm1bd1o82hs.apps.googleusercontent.com",
        clientSecret: "yd6_ZdJOVbZIyqF9JUKPZ2Ft",
    }
});

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  router.post('/send', (req, res, next) => {
      let name = req.body.name;
      let email = req.body.email;
      let message = req.body.message;

      let mail = {
          from: email,
          to: process.env.MY_EMAIL,
          subject: "Someone messaged you from alexdollard.xyz",
          text: message
      }

      transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
      })
  })

