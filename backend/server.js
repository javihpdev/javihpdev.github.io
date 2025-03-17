// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');  // Asegúrate de tener CORS habilitado.

dotenv.config();  // Cargar las variables de entorno desde .env

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());  // Habilitar CORS para que tu frontend pueda hacer solicitudes
app.use(express.json()); // Para poder recibir datos JSON

// Ruta para manejar el envío de contacto
app.post('/enviar-correo', (req, res) => {
    const { asunto, nombre, email, mensaje } = req.body;
    console.log('Datos recibidos:', { asunto,nombre, email, mensaje }); 

    // Validar que los campos no estén vacíos
    if (!asunto ||!nombre || !email || !mensaje) {
        return res.status(400).json({ message: 'Por favor, rellena todos los campos.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,  // Enviar el correo a tu dirección
        subject: `Asunto miPorfolio:${asunto}`,
        text: `Nombre:\n\n${nombre}\n\nEmail:\n\n${email}\n\nMensaje:\n\n${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Hubo un error al enviar el correo', error });
        }
        res.status(200).json({ message: 'Correo enviado exitosamente' });
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
