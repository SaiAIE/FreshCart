const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const { createDailySell, getAllDailySell, getDailySellById, updateDailySell, deleteDailySell } = require("../../controllers/dailySells.controller")

const app = express()
app.use(express.json())

app.post('/dailySells', createDailySell)
app.get('/dailySells', getAllDailySell)
app.get('/dailySells/:id', getDailySellById)
app.put('/dailySells/:id', updateDailySell)
app.delete('/dailySells/:id', deleteDailySell)

beforeAll(async () => {
    const uniqueDB = `testdb_${Date.now()}`
    await mongoose.connect(`mongodb://localhost:27017/${uniqueDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
})

afterAll(async () => {
    await mongoose.connection.collection("dailySells").deleteMany({})
    await mongoose.connection.close()
})

describe("dailySell Controller", () => {
    let dailySellId

    it("should create a new dailySell", async () => {
        const res = await request(app)
            .post("/dailySells")
            .send({ img: "test.jpg", title: "test product", buttonText: "buy now" })

        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("dailySell")

        dailySellId = res.body.dailySell._id
    })

    it("should fetch all dailySells", async () => {
        const res = await request(app).get("/dailySells")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a dailySell by ID", async () => {
        const res = await request(app).get(`/dailySells/${dailySellId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("title", "test product")
    })

    it("should update a dailySell", async () => {
        const res = await request(app)
            .put(`/dailySells/${dailySellId}`)
            .send({ title: "Updated dailySell" })
        expect(res.statusCode).toBe(200)
        expect(res.body.updateDailySell.title).toBe("Updated dailySell")
    })

    it("should delete a dailySell", async () => {
        const res = await request(app).delete(`/dailySells/${dailySellId}`)
        expect(res.statusCode).toBe(200)
    })
})
