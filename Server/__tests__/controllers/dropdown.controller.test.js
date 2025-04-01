const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const { createDropdown, getAllDropdown, getDropdownById, updateDropdown, deleteDropdown } = require("../../controllers/dropdown.controller")

const app = express()
app.use(express.json())

app.post('/dropdowns', createDropdown)
app.get('/dropdowns', getAllDropdown)
app.get('/dropdowns/:id', getDropdownById)
app.put('/dropdowns/:id', updateDropdown)
app.delete('/dropdowns/:id', deleteDropdown)

beforeAll(async () => {
    const uniqueDB = `testdb_${Date.now()}`
    await mongoose.connect(`mongodb://localhost:27017/${uniqueDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
})

afterAll(async () => {
    await mongoose.connection.collection("dropdowns").deleteMany({})
    await mongoose.connection.close()
})

describe("dropdowns Controller", () => {
    let dropdownId

    it("should create a new Dropdown", async () => {
        const res = await request(app)
            .post("/dropdowns")
            .send({ heading: "test Dropdown", icon: "test-icon" })

        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("dropdown")

        dropdownId = res.body.dropdown._id
    })

    it("should fetch all dropdowns", async () => {
        const res = await request(app).get("/dropdowns")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a Dropdown by ID", async () => {
        const res = await request(app).get(`/dropdowns/${dropdownId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("heading", "test Dropdown")
    })

    it("should update a Dropdown", async () => {
        const res = await request(app)
            .put(`/dropdowns/${dropdownId}`)
            .send({ heading: "Updated Dropdown" })
        expect(res.statusCode).toBe(200)
        expect(res.body.updateDropdown.heading).toBe("Updated Dropdown")
    })

    it("should delete a Dropdown", async () => {
        const res = await request(app).delete(`/dropdowns/${dropdownId}`)
        expect(res.statusCode).toBe(200)
    })
})
