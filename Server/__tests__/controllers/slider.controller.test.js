const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const { createSlider, getAllSlider, getSliderById, updateSlider, deleteSlider } = require("../../controllers/slider.controller")
const { Slider } = require("../../models/slider.model")
const app = express()
app.use(express.json())

app.post('/sliders', createSlider)
app.get('/sliders', getAllSlider)
app.get('/sliders/:id', getSliderById)
app.put('/sliders/:id', updateSlider)
app.delete('/sliders/:id', deleteSlider)

beforeAll(async () => {
    const uniqueDB = `testdb_${Date.now()}`
    await mongoose.connect(`mongodb://localhost:27017/${uniqueDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
})

afterAll(async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
})

describe("sliders Controller", () => {
    let sliderId

    it("should create a new Slider", async () => {
        const res = await request(app)
            .post("/sliders")
            .send({img:"test.jpg",tag:"new", heading: "test Slider", description:"This is a test slider" })

        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("slider")

        sliderId = res.body.slider._id
    })

    it("should fetch all sliders", async () => {
        const res = await request(app).get("/sliders")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a Slider by ID", async () => {
        const res = await request(app).get(`/sliders/${sliderId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("heading", "test Slider")
    })

    it("should update a Slider", async () => {
        const res = await request(app)
            .put(`/sliders/${sliderId}`)
            .send({ heading: "Updated Slider" })
        expect(res.statusCode).toBe(200)
        expect(res.body.updateSlider.heading).toBe("Updated Slider")
    })

    it("should delete a Slider", async () => {
        const res = await request(app).delete(`/sliders/${sliderId}`)
        expect(res.statusCode).toBe(200)
    })
})
