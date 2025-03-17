const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const productRoutes = require("../../routes/product.routes")
const {Product} = require("../../models/product.model")

const app = express()
app.use(express.json())
app.use("/product",productRoutes)

beforeAll(async ()=>{
    await mongoose.connect("mongodb://localhost:27017/testdb",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
})
afterAll(async ()=>{
    await mongoose.connection.collection("products").deleteMany({});
    await mongoose.connection.close()
})

describe("product Routes", ()=>{
    let productId

    it("should create a new product", async ()=>{
        const res = await request(app)
        .post("/product")
        .send({image:["test-image.jpg"],category:"Fruits",name:"Test product",rating:"4.5",price:"100",originalPrice:"150"})
        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("product")
        productId = res.body.product._id
    })

    it("shpould fetch all products", async ()=>{
        const res = await request(app).get("/product")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a product by Id", async ()=>{
        const res = await request(app).get(`/product/${productId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("name", "Test product")
    })

    it("should update a product item", async()=>{
        const res = await request(app)
        .put(`/product/${productId}`)
        .send({name :"Updated product"})
        expect(res.statusCode).toBe(200)
        expect(res.body.updateProduct.name).toBe("Updated product")
    })

    it("should delete a product", async()=>{
        const res = await request(app).delete(`/product/${productId}`)
        expect(res.statusCode).toBe(200)
    })
})