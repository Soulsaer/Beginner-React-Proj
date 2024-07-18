import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv'
import db from './config/db.js'
import router from './routes/userroutes.js'


//config dotenv
dotenv.config(dotenv);

//db connection
db();

const app = express();

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/',router);


//Port
const PORT = process.env.PORT || 8080

app.listen(PORT, (req,res)=>{
    console.log('Server up!');
})