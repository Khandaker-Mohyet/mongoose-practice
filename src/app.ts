import express, { Application, Request, Response } from 'express';
import { notesRouters } from './app/controllers/note.controller';
import { userRoute } from './app/controllers/user.controller';

const app: Application = express()

app.use(express.json())


app.use("/notes", notesRouters)
app.use("/users", userRoute)



app.get('/', (req: Request, res: Response) => {
    res.send("welcome to Khendaker Mohyet work station")
})

export default app;