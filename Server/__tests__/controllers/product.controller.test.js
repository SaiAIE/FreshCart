const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct} = require("../../controllers/product.controller")
const {Product} = require("../../models/product.model")
const app = express()
app.use(express.json())

app.post('/products',createProduct)
app.get('/products',getAllProducts)
app.get('/products/:id',getProductById)
app.put('/products/:id',updateProduct)
app.delete('/products/:id',deleteProduct)

beforeAll(async ()=>{
    const uniqueDB = `testdb_${Date.now()}`
    await mongoose.connect(`mongodb://localhost:27017/${uniqueDB}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
})

afterAll(async ()=>{
    await mongoose.connection.collection("products").deleteMany({})
    await mongoose.connection.close()
})

describe("products Controller", ()=>{
    let productId

    it("should create a new Product", async ()=>{
        const res = await request(app)
        .post("/products")
        .send({image:["test-image.jpg"],category:"Fruits",name:"test product",rating:"4.5",price:"100",originalPrice:"150"})

        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("product")

        productId = res.body.product._id
    })

    it("should fetch all products", async ()=>{
        const res = await request(app).get("/products")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a Product by ID", async ()=>{
        const res = await request(app).get(`/products/${productId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("name","test product")
    })

    it("should update a Product", async ()=>{
        const res = await request(app)
        .put(`/products/${productId}`)
        .send({name:"Updated Product"})
        expect(res.statusCode).toBe(200)
        expect(res.body.updateProduct.name).toBe("Updated Product")
    })

    it("should delete a Product", async ()=>{
        const res = await request(app).delete(`/products/${productId}`)
        expect(res.statusCode).toBe(200)
    })
})
