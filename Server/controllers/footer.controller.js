import { Footer } from "../models/footer.model.js";

export const createFooter = async (req,res)=>{
    try{
        const footer = new Footer(req.body)
        await footer.save()
        res.status(201).json({message:"Footer Created Successfully",footer})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const getAllFooter = async(req,res)=>{
    try{
        const footers = await Footer.find()
        res.status(200).json(footers)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
export const getFooterById = async(req,res)=>{
    try{
        const footer = await Footer.findById(req.params.id)
        if(!footer) return res.status(404).json({message:"Footer not found"})
            res.status(200).json(footer)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const updateFooterr = async (req,res)=>{
    try{
        const updateFooter = await Footer.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateFooter) return res.status(404).json({message:"Footer not found"})
            res.status(200).json({message:"Footer updated Successfully",updateFooter})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const deleteFooter = async (req,res)=>{
    try{
        const deleteFooter = await Footer.findByIdAndDelete(req.params.id)
        if(!deleteFooter) return res.status(404).json({message:"Footer not found"})
            res.status(200).json({message:"Footer deleted Successfully",deleteFooter})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
