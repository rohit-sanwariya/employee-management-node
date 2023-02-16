import express, { Application } from 'express';
import AuthRouter from './Routes/Auth'
import { Mongoose } from 'mongoose'
import "dotenv/config";

const app: Application = express();
const mongoose = new Mongoose()

const PORT: string | undefined = process.env.PORT;
const MONGO_URI: string | undefined = process.env.MONGO_URI || "";

app.use(express.json());

app.use('/auth', AuthRouter)


app.listen(PORT, async () => {
    console.log(`port listening on ${PORT}`);
    try {
        await mongoose.connect(MONGO_URI);
    } catch (error) {
        console.log(error)
    }
})