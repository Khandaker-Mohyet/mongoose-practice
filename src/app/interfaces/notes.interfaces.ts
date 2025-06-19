import { Types } from "mongoose"

export interface INotes{
    title: string,
    content: string,
    category: "person"|"work"|"study"|"other",
    pinned: boolean,
    tags:{
        label:string,
        color:string
    },
    userId: Types.ObjectId
}