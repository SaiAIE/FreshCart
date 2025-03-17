const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const groceryRoutes = require("../../routes/grocery.routes")
const {Grocery} = require("../../models/grocery.model")

const app = express()
app.use(express.json())
app.use("/grocery",groceryRoutes)

beforeAll(async ()=>{
    await mongoose.connect("mongodb://localhost:27017/testdb",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
})
afterAll(async ()=>{
    await mongoose.connection.collection("groceries").deleteMany({});
    await mongoose.connection.close()
})

describe("Grocery Routes", ()=>{
    let groceryId

    it("should create a new grocery", async ()=>{
        const res = await request(app)
        .post("/grocery")
        .send({img:"test.jpg",title:"Test grocery", offer:"10% off"})
        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("grocery")
        groceryId = res.body.grocery._id
    })

    it("shpould fetch all groceries", async ()=>{
        const res = await request(app).get("/grocery")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a grocery by Id", async ()=>{
        const res = await request(app).get(`/grocery/${groceryId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("title", "Test grocery")
    })

    it("should update a grocery item", async()=>{
        const res = await request(app)
        .put(`/grocery/${groceryId}`)
        .send({title :"Updated grocery"})
        expect(res.statusCode).toBe(200)
        expect(res.body.updateGrocery.title).toBe("Updated grocery")
    })

    it("should delete a grocery", async()=>{
        const res = await request(app).delete(`/grocery/${groceryId}`)
        expect(res.statusCode).toBe(200)
    })
})