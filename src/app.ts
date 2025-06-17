import express,{Application, Request, Response} from 'express';
import { model, Schema } from 'mongoose';

const app:Application = express()

app.use(express.json())

const noteSchema = new Schema({
    title: {type: String, require: true, trim: true},
    contact: {type: String, default:""},
    category:{
        type: String,
        enum:["person", "work", "study", "other"],
        default: "person"
    },
    pinned:{
        type:Boolean,
        default: false
    },
    tags:{
        label:{type:String, require: true},
        color:{type: String, default: 'Green'}
    }
})

const Note = model("Note", noteSchema)

app.post('/notes/create-note', async (req:Request, res:Response)=>{
    
    const body = req.body;

    // approach 1- of creating a data
    // const myNote = new Note({
    //     title: "Learning Express",
    //     tags:{
    //         label: "database"
    //     }
    // })

    // await myNote.save()

    // approach-2

    const note = await Note.create(body)

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    })
})



app.get('/notes', async (req:Request, res:Response)=>{

    const notes = await Note.find()

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        notes
    })
})

app.get('/notes/:id', async (req:Request, res:Response)=>{

    const id = req.params.id
    const notes = await Note.findOne({_id:id})

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        notes
    })
})


app.get('/', (req:Request, res:Response)=>{
    res.send("welcome to Khendaker Mohyet work station")
})

export default app;