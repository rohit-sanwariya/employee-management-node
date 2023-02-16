import express, { Application } from 'express';
import AuthRouter from './Routes/Auth'

const app:Application = express();
const PORT:number = 3000;

app.use(express.json());

app.use('/auth',AuthRouter)


app.listen(PORT,()=>{
    console.log(`port listening on ${PORT}`)
})