import express from 'express';
import morgan from 'morgan';
import db from './database/db.js';
import tasksRoutes from './routes/task.routes.js';
import userRoutes from './routes/user.routes.js';
import dotenv from 'dotenv';
dotenv.config();
import './database/asociations.js'
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT

const app = express();

/*DATABASE*/
db.sync({force:false})
.then(()=>{
    console.log('Conexión a la Base de datos exitosa')
})
.catch((err)=>{
    console.log(`Error al conectar a la Base de datos= ${err}`)
});

/*MIDDLEWARES*/

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(cookieParser())

/*ROUTES*/
app.use('/tasks', tasksRoutes);
app.use('/users', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server ok on port= ${PORT}`)
});
