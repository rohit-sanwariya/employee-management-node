import express, { Application } from 'express';
import Router from './Routes'
 
import "dotenv/config";
import { ConnectionOptions } from 'tls';
import { connect } from 'mongoose';

const app: Application = express();
 

const PORT: string | undefined = process.env.PORT;
const MONGO_URI: string | undefined = process.env.MONGO_URI || "";

app.use(express.json());

app.use("/",Router)


app.listen(PORT, async () => {
    console.log(`port listening on ${PORT}`);
    try {
       const error = await connect(MONGO_URI ,{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        
    } as ConnectionOptions);
        console.log('success',error.connection.db.databaseName); 
        
    } catch (error) {
        console.log(error);
    }
})