require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(
  cors({
    origin: "https://portfolioarb.netlify.app/", // Reemplaza con la URL de tu frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Habilita el uso de cookies, si es necesario
  })
);


//! ESTO VA DENTRO DE CORS POR SI QUIERES ESPECIFICAR LA RUTA
//   {
//   origin: "http://localhost:3000", // Reemplaza con la URL de tu frontend
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true, // Habilita el uso de cookies, si es necesario
// }
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  host: "smtp.mandrillapp.com",
  port: 587,
  // secure: true,
  // service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "djaldair14@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
