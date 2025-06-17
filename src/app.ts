import express,{Application, Request, Response} from 'express';
import { model, Schema } from 'mongoose';

const app:Application = express()

const noteSchema = new Schema({
    title: {type: String, require: true, trim: true},
    contact: {type: String, default:""},
    category:{
        type: String,
        enum:["person", "work", "study", "other"],
        default: "personal"
    },
    pinned:{
        type:Boolean,
        default: false
    }
})

const Note = model("Note", noteSchema)

app.post('/create-note', async (req:Request, res:Response)=>{
    const myNote = new Note({
        title: "Learning Mongoose",
        contact: "I am learning MOngoose",
        price:100
    })

    await myNote.save()

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})


app.get('/', (req:Request, res:Response)=>{
    res.send("welcome to Khendaker Mohyet work station")
})

export default app;