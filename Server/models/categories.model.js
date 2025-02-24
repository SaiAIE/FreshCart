import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    img:{type:String,required:true},
    title:{type:String,required:true}
})

export const Category = mongoose.model("Category",categorySchema)