import mongoose from "mongoose"
import { Server } from 'http'
import app from "./app";

let server: Server;

const PORT = 5000;


async function main() {
    try {
        await mongoose.connect("mongodb+srv://mongodb:nrmXqzUhIs0qRMdq@cluster0.47f5u.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected ot MongoDB using Mongoose")
        server = app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()