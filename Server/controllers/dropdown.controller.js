import { Dropdown } from "../models/dropdown.model.js";

export const createDropdown = async (req,res)=>{
    try{
        const dropdown = new Dropdown(req.body)
        await dropdown.save()
        res.status(201).json({message:"Dropdown Created Successfully",dropdown})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const getAllDropdown = async(req,res)=>{
    try{
        const dropdowns = await Dropdown.find()
        res.status(200).json(dropdowns)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
export const getDropdownById = async(req,res)=>{
    try{
        const dropdown = await Dropdown.findById(req.params.id)
        if(!dropdown) return res.status(404).json({message:"Dropdown not found"})
            res.status(200).json(dropdown)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const updateDropdown = async (req,res)=>{
    try{
        const updateDropdown = await Dropdown.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateDropdown) return res.status(404).json({message:"Dropdown not found"})
            res.status(200).json({message:"Dropdown updated Successfully",updateDropdown})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const deleteDropdown = async (req,res)=>{
    try{
        const deleteDropdown = await Dropdown.findByIdAndDelete(req.params.id)
        if(!deleteDropdown) return res.status(404).json({message:"Dropdown not found"})
            res.status(200).json({message:"Dropdown deleted Successfully",deleteDropdown})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
