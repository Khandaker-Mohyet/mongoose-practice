import express, { Request, Response } from 'express'
import { User } from '../models/user.model'
import { z } from 'zod'

export const userRoute = express.Router()


const CreateUserZodSchema = z.object(
    {
        firstName: z.string(),
        lastName: z.string(),
        age: z.number(),
        email: z.string(),
        role: z.string().optional()
    }
)



userRoute.post("/create-user", async (req: Request, res: Response) => {
    const body = req.body

    const user = await User.create(body)

    res.status(200).json({
        success: true,
        message: "user created successfully",
        user
    })
}),

    userRoute.get("/", async (req: Request, res: Response) => {
        const users = await User.find()
        res.status(200).json({
            success: true,
            message: "user created successfully",
            users
        })
    })

userRoute.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const user = await User.findById(id)
    res.status(200).json({
        success: true,
        message: "user created successfully",
        user
    })
})

userRoute.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    res.status(200).json({
        success: true,
        message: "user created successfully",
        user
    })
})

userRoute.patch("/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const body = req.body
    const user = await User.findByIdAndUpdate(id, body)
    res.status(200).json({
        success: true,
        message: "user created successfully",
        user
    })
})

