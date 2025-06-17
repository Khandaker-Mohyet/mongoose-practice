import express,{Application, Request, Response} from 'express';
import { model, Schema } from 'mongoose';

const app:Application = express()

const noteSchema = new Schema({
    title: String,
    contact: String,
    price: Number
})

const Note = model("Note", noteSchema)




app.get('/', (req:Request, res:Response)=>{
    res.send("welcome to Khendaker Mohyet work station")
})

export default app;