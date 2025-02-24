import { Category } from "../models/categories.model.js";

export const createCategory = async (req,res)=>{
    try{
        const category = new Category(req.body)
        await category.save()
        res.status(201).json({message:"Category Created Successfully",category})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const getAllCategories = async(req,res)=>{
    try{
        const categories = await Category.find()
        res.status(200).json(categories)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
export const getCategoryById = async(req,res)=>{
    try{
        const category = await Category.findById(req.params.id)
        if(!category) return res.status(404).json({message:"category not found"})
            res.status(200).json(category)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const updateCategory = async (req,res)=>{
    try{
        const updateCategory = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateCategory) return res.status(404).json({message:"Category not found"})
            res.status(200).json({message:"Category updated Successfully",updateCategory})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const deleteCategory = async (req,res)=>{
    try{
        const deleteCategory = await Category.findByIdAndDelete(req.params.id)
        if(!deleteCategory) return res.status(404).json({message:"Category not found"})
            res.status(200).json({message:"Category deleted Successfully",deleteCategory})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
