var nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'dheerajchauhan11@gmail.com',
        pass: '9466553105aA@'
    }
});
// For Contact Mail 
exports.SendMail = async function(req, res) {
    var mailOptions = {
        from: 'dheerajchauhan11@gmail.com',
        to: 'somitra@webapp.world',
        subject: 'Demo Mail For testing',
        text: 'Hello Sir, This mail is only form demo perpose '
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            res.json("Email has been send Successfully...")
            console.log("Email has been send Successfully...", info.response);
        }
    })
};

// For UserMail Detailes 
exports.UserEmail = async function(req, res) {
    var email = req.body.email
    // res.send(email)
    var mailOptions = {
        from: 'dheerajchauhan11@gmail.com',
        to: 'somitra@webapp.world',
        subject: 'Demo Mail For testing',
        text: `This Email From WebApp Website User :`+ email 
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            res.json("Email has been send Successfully...")
            console.log("Email has been send Successfully...", info.response);
        }
    })
};

exports.mail =async function(req,res) {
res.send("this is from route")
}
