import mongoose from "mongoose";

const Schema = mongoose.Schema

const Todo  = new Schema({
    todo: {
        type: String
    },
    done: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
})

export default mongoose.model('Todo', Todo)