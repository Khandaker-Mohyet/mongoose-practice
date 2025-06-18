import express, { Request, Response } from "express"
import { Note } from "../models/note.model";

export const notesRouters = express.Router()

notesRouters.post('/create-note', async (req: Request, res: Response) => {

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

notesRouters.get('/', async (req: Request, res: Response) => {

    const notes = await Note.find()

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        notes
    })
})

notesRouters.get('/:id', async (req: Request, res: Response) => {

    const id = req.params.id
    const notes = await Note.findOne({ _id: id })

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        notes
    })
})

notesRouters.delete('/:id', async (req: Request, res: Response) => {

    const id = req.params.id
    const notes = await Note.findByIdAndUpdate(id)

    res.status(201).json({
        success: true,
        message: "Note updated successfully",
        notes
    })
})

notesRouters.patch('/:id', async (req: Request, res: Response) => {

    const id = req.params.id
    const body = req.body
    // const notes = await Note.findByIdAndUpdate(id,body,{new: true})
    // const notes = await Note.updateOne({_id:id},body,{new: true})
    const notes = await Note.findOneAndUpdate({ _id: id }, body, { new: true })

    res.status(201).json({
        success: true,
        message: "Note updated successfully",
        notes
    })
})
