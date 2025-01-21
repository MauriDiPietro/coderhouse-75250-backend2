import express from 'express'
import cookieParser from 'cookie-parser'
import 'dotenv/config'

const app = express();

const SECRET_KEY = process.env.SECRET_KEY;

app.use(cookieParser(SECRET_KEY));
app.use(express.json());

app.get('/set-cookie', (req, res)=>{
    res.cookie('idioma', 'ingles', { maxAge: 30000 }).json({ msg: 'ok' })
})

app.get('/set-signed-cookie', (req, res)=>{
    res.cookie('nombre', 'juan', { maxAge: 30000, signed: true, httpOnly: true }).json({ msg: 'ok' })
})

app.get('/get-cookie', (req, res)=>{
    console.log(req.signedCookies)
    const { idioma } = req.cookies;
    idioma === 'ingles' ? res.send('Hello!') : res.send('Hola!')
})

app.listen(8080, ()=>console.log('server ok puerto 8080'))