import express from 'express'
import cookieParser from 'cookie-parser'
import handlebars from 'express-handlebars'
import { __dirname } from './utils.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

