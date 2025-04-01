const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const { createFooter, getAllFooter, getFooterById, updateFooterr, deleteFooter } = require("../../controllers/footer.controller")
const { Footer } = require("../../models/footer.model")
const app = express()
app.use(express.json())

app.post('/footers', createFooter)
app.get('/footers', getAllFooter)
app.get('/footers/:id', getFooterById)
app.put('/footers/:id', updateFooterr)
app.delete('/footers/:id', deleteFooter)

beforeAll(async () => {
    const uniqueDB = `testdb_${Date.now()}`
    await mongoose.connect(`mongodb://localhost:27017/${uniqueDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
})

afterAll(async () => {
    await mongoose.connection.collection("footers").deleteMany({})
    await mongoose.connection.close()
})

describe("Footers Controller", () => {
    let footerId

    it("should create a new Footer", async () => {
        const res = await request(app)
            .post("/footers")
            .send({ heading: "test Footer", items: ["item 1", "item 2"] })

        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("footer")

        footerId = res.body.footer._id
    })

    it("should fetch all footers", async () => {
        const res = await request(app).get("/footers")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a Footer by ID", async () => {
        const res = await request(app).get(`/footers/${footerId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("heading", "test Footer")
    })

    it("should update a Footer", async () => {
        const res = await request(app)
            .put(`/footers/${footerId}`)
            .send({ heading: "Updated Footer" })
        expect(res.statusCode).toBe(200)
        expect(res.body.updateFooter.heading).toBe("Updated Footer")
    })

    it("should delete a Footer", async () => {
        const res = await request(app).delete(`/footers/${footerId}`)
        expect(res.statusCode).toBe(200)
    })
})
