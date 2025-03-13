const { Product } = require("../models/product.model.js");

 const createProduct = async (req,res)=>{
    try{
        const product = new Product(req.body)
        await product.save()
        res.status(201).json({message:"Product Created Successfully",product})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

 const getAllProducts = async(req,res)=>{
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
 const getProductById = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(404).json({message:"Product not found"})
            res.status(200).json(product)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

 const updateProduct = async (req,res)=>{
    try{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateProduct) return res.status(404).json({message:"Product not found"})
            res.status(200).json({message:"Product updated Successfully",updateProduct})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

 const deleteProduct = async (req,res)=>{
    try{
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        if(!deleteProduct) return res.status(404).json({message:"Product not found"})
            res.status(200).json({message:"Product deleted Successfully",deleteProduct})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct}
