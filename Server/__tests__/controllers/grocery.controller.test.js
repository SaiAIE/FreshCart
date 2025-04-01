const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const { createGrocery, getAllGrocery, getGroceryById, updateGrocery, deleteGrocery } = require("../../controllers/grocery.controller")
const { Grocery } = require("../../models/grocery.model")
const app = express()
app.use(express.json())

app.post('/groceries', createGrocery)
app.get('/groceries', getAllGrocery)
app.get('/groceries/:id', getGroceryById)
app.put('/groceries/:id', updateGrocery)
app.delete('/groceries/:id', deleteGrocery)

beforeAll(async () => {
    const uniqueDB = `testdb_${Date.now()}`
    await mongoose.connect(`mongodb://localhost:27017/${uniqueDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
})

afterAll(async () => {
    await mongoose.connection.collection("groceries").deleteMany({})
    await mongoose.connection.close()
})

describe("Groceries Controller", () => {
    let groceryId

    it("should create a new Grocery", async () => {
        const res = await request(app)
            .post("/groceries")
            .send({ img: "test.jpg", title: "test Grocery", offer: "10% off" })

        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("grocery")

        groceryId = res.body.grocery._id
    })

    it("should fetch all groceries", async () => {
        const res = await request(app).get("/groceries")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a Grocery by ID", async () => {
        const res = await request(app).get(`/groceries/${groceryId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("title", "test Grocery")
    })

    it("should update a Grocery", async () => {
        const res = await request(app)
            .put(`/groceries/${groceryId}`)
            .send({ title: "Updated Grocery" })
        expect(res.statusCode).toBe(200)
        expect(res.body.updateGrocery.title).toBe("Updated Grocery")
    })

    it("should delete a Grocery", async () => {
        const res = await request(app).delete(`/groceries/${groceryId}`)
        expect(res.statusCode).toBe(200)
    })
})
