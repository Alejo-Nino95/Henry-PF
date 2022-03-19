const nodemailer = require("nodemailer");
require("dotenv").config();
const {
  EMAIL_ACCOUNT,
  EMAIL_PASSWORD, //agregarlos en sus .env
} = process.env;

async function send(
  emailTo = "beefshophenry@gmail.com",
  emailSubject = "Test Email ✔",
  emailHtml = "<div>Test</div>",
  attachments = []
) {
  // create reusable transporter object using the default SMTP transport
  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: EMAIL_ACCOUNT, // generated ethereal user
      pass: EMAIL_PASSWORD, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
    from: "No-Reply <no-reply-beefshophenry@gmail.com>",
  });

  let message = {
    // Comma separated list of recipients
    to: emailTo,

    // Subject of the message
    subject: emailSubject,

    // HTML body
    html: emailHtml,

    // An array of attachments
    attachments: attachments
     // [
    //     // String attachment
    //     {
    //         filename: 'notes.txt',
    //         content: 'Some notes about this e-mail',
    //         contentType: 'text/plain' // optional, would be detected from the filename
    //     },

    //     // Binary Buffer attachment
    //     {
    //         filename: 'image.png',
    //         content: Buffer.from(
    //             'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
    //                 '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
    //                 'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
    //             'base64'
    //         ),

    //         cid: 'note@example.com' // should be as unique as possible
    //     },

    //     // File Stream attachment
    //     {
    //         filename: 'nyan cat ✔.gif',
    //         path: __dirname + '/assets/nyan.gif',
    //         cid: 'nyan@example.com' // should be as unique as possible
    //     }
    // ]
  };

  let info = await transporter.sendMail(message);
  return "Message sent: %s", info.messageId;
}

async function sendEmail(emailTo, emailSubject, emailHtml, attachments) {
  try {
    const sending = await send(emailTo, emailSubject, emailHtml, attachments);
    return { done: true, data: sending };
  } catch (error) {
    console.log(error);
    return { done: false, data: error };
  }
}

module.exports = { sendEmail };
