// pages/api/enviar-correo.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'POST') {
        const { asunto, nombre, email, mensaje } = req.body;

        if (!asunto || !nombre || !email || !mensaje) {
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
            to: process.env.EMAIL_USER,
            subject: `Asunto miPorfolio: ${asunto}`,
            text: `Nombre: ${nombre}\n\nEmail: ${email}\n\nMensaje: ${mensaje}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Correo enviado exitosamente' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            console.error('Error completo:', JSON.stringify(error, null, 2));
            res.status(500).json({ message: 'Hubo un error al enviar el correo', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}