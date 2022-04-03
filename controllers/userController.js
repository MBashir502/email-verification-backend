const userModel = require("../models/model");
const nodemailer = require("nodemailer");
const userLogic = async (req, res) => {
  const register = new userModel({
    username: req.body.username,
    email: req.body.email,
    birthday:req.body.birthday,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    service:'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
      user: "practicea9batch@gmail.com", // generated ethereal user
      pass: "otlfvqevkqhmjhxt", // generated ethereal password
    },
  });

  const mailOptions = {
    from: "practicea9batch@gmail.com",
    to: [register.email, "harisali2928@gmail.com"],
    subject: "User Data",
    html: `
    <h2>You entered name ${register.username}</h2>
    <h2>You entered email ${register.email}</h2>
    <h2>You entered number ${register.birthday}</h2>
    <h2>You entered password ${register.password}</h2>
    <h2>You entered password ${register.confirmPassword}</h2>
    <h1>Is this info true? If yes then verify your email</h1>
    <a href="/">Verify Your email</a>
    `,
  };
  const info = await transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("error occurs");
    } else {
      console.log("email sent");
    }
  });
  register
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
};
module.exports = userLogic;
