const express = require("express");
const router = express.Router();
const MailController = require('../../controller/MailController')

router.get('/sendMail', MailController.SendMail)
router.post('/userMail', MailController.UserEmail)

router.get('/', MailController.mail)

module.exports = router;
