import { model, Schema } from "mongoose"

const noteSchema = new Schema(
    {
        title: { type: String, require: true, trim: true },
        contact: { type: String, default: "" },
        category: {
            type: String,
            enum: ["person", "work", "study", "other"],
            default: "person"
        },
        pinned: {
            type: Boolean,
            default: false
        },
        tags: {
            label: { type: String, require: true },
            color: { type: String, default: 'Green' }
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export const Note = model("Note", noteSchema)