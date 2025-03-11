import 'dotenv/config'
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
import { createTransport } from 'nodemailer';
import { templateHtml } from './template.js';

export const transporter = createTransport({
    host: process.env.HOST,
    port: process.env.PORT_ETHEREAL,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

/* ------------------------------------ TRANSPORTER GOOGLE ----------------------------------- */

export const transporterGoogle = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS_GOOGLE
    }
})

/* ------------------------------------ - ----------------------------------- */

/* ------------------------------------ CONFIG HANDLEBARS ----------------------------------- */

const hbsConfig = {
    viewEngine: {
        extName: '.handlebars',
        partialsDir: path.resolve('.src/views'),
        defaultLayout: false
    },
    viewPath: path.resolve('./src/views'),
    extName: '.handlebars',
};

transporter.use('compile', hbs(hbsConfig));

export const mailConfigHbs = {
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    subject: 'Envio de mail desde nodemailer-handlebars',
    template: 'email', //nombre de la plantilla
    context: {
        title: 'Este es un email enviado con una plantilla handlebars',
        text: 'Hola como estas?'
    }
}

/* ------------------------------------ - ----------------------------------- */

export const mailConfig = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Bienvenido/a',
    // text: 'Bienvenido/a al curso de backend 3'
    // html: '<h1>Bienvenido/a al curso de backend 3</h1>'
    html: templateHtml,
    attachments: [
        {
            path: `${process.cwd()}/src/services/texto.txt`,
            filename: 'resumen-de-cuenta.txt'
        }
    ]
}