const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const sliderRoutes = require("../../routes/slider.routes")
const {Slider} = require("../../models/slider.model")

const app = express()
app.use(express.json())
app.use("/slider",sliderRoutes)

beforeAll(async ()=>{
    await mongoose.connect("mongodb://localhost:27017/testdb",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
})
afterAll(async ()=>{
    await mongoose.connection.collection("sliders").deleteMany({});
    await mongoose.connection.close()
})

describe("Slider Routes", ()=>{
    let sliderId

    it("should create a new slider", async ()=>{
        const res = await request(app)
        .post("/slider")
        .send({img:"test.jpg",tag:"new arrival",heading:"Test slider", description:"This is a test slider"})
        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("slider")
        sliderId = res.body.slider._id
    })

    it("shpould fetch all sliders", async ()=>{
        const res = await request(app).get("/slider")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a slider by Id", async ()=>{
        const res = await request(app).get(`/slider/${sliderId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("heading", "Test slider")
    })

    it("should update a slider item", async()=>{
        const res = await request(app)
        .put(`/slider/${sliderId}`)
        .send({heading :"Updated slider"})
        expect(res.statusCode).toBe(200)
        expect(res.body.updateSlider.heading).toBe("Updated slider")
    })

    it("should delete a slider", async()=>{
        const res = await request(app).delete(`/slider/${sliderId}`)
        expect(res.statusCode).toBe(200)
    })
})