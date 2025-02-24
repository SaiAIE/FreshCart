import { Grocery } from "../models/grocery.model.js";

export const createGrocery = async (req,res)=>{
    try{
        const grocery = new Grocery(req.body)
        await grocery.save()
        res.status(201).json({message:"Grocery Created Successfully",grocery})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const getAllGrocery = async(req,res)=>{
    try{
        const groceries = await Grocery.find()
        res.status(200).json(groceries)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
export const getGroceryById = async(req,res)=>{
    try{
        const grocery = await Grocery.findById(req.params.id)
        if(!grocery) return res.status(404).json({message:"Grocery not found"})
            res.status(200).json(grocery)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const updateGrocery = async (req,res)=>{
    try{
        const updateGrocery = await Grocery.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateGrocery) return res.status(404).json({message:"Grocery not found"})
            res.status(200).json({message:"Grocery updated Successfully",updateGrocery})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const deleteGrocery = async (req,res)=>{
    try{
        const deleteGrocery = await Grocery.findByIdAndDelete(req.params.id)
        if(!deleteGrocery) return res.status(404).json({message:"Grocery not found"})
            res.status(200).json({message:"Grocery deleted Successfully",deleteGrocery})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
