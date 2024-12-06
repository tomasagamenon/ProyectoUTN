var express = require('express');
var router = express.Router();
var productsModel = require('./../models/productsModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/products', async function (req, res, next) {
    let products = await productsModel.getProducts();
    products = products.map(products => {
        if (products.img_id) {
            const imagen = cloudinary.url(products.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...products,
                imagen
            }
        } else {
            return {
                ...products,
                imagen: ''
            }
        }
    });
    res.json(products);
});


router.post('/contact', async (req, res) => {
    const mail = {
        to: 'tomas.agamenon@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere más informacion a este correo: 
    ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: 
    ${req.body.telefono}`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT, auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    await transport.sendMail(mail)
    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;