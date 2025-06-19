import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";


const usersSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            minlength:5,
            maxlength:10
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            lowercase: true,
            unique: [true, 'Email common hoya gasa'],
            required: true,
            trim: true
        },
        age: {
            type: Number,
            required: true,
            min:18,
            max:60
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: {
                values:['user', 'admin','superadmin'],
                message:"Role is not valid. got {value} role"
            },
            default: 'user'
        },
        address:{
            city: {type: String},
            street: {type: String},
            zip:{type:Number}
        }

    },
    {
        timestamps: true
    }
)

export const User = model("user", usersSchema)