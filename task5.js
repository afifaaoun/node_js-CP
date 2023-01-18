// 5-  In this task, you will:

// create a file named email-sender  
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

// Try to send your self email using this


//  3malna account f site ethereal thez menou les coordonnées si nn bl gmail il est plus sécurisé, du coup le code est plus compliqué


var nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'geovanni.hettinger@ethereal.email',
        pass: 'rPn2m8zm672sRSyrUy'
    }
});
  
  let info =transporter.sendMail ({
    from: 'geovanni.hettinger@ethereal.email',
    to: 'afifaaoun1995@gmail.com',
    subject: 'Sending Email using Node.js for the second time',
    text: 'hello afifa !'
  })
  
  
      console.log("Email sent:", info.messageId);
      console.log('preview url', nodemailer.getTestMessageUrl);
