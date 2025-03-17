const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const dropdownRoutes = require("../../routes/dropdown.routes")
const {Dropdown} = require("../../models/dropdown.model")

const app = express()
app.use(express.json())
app.use("/dropdowns",dropdownRoutes)

beforeAll(async ()=>{
    await mongoose.connect("mongodb://localhost:27017/testdb",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
})
afterAll(async ()=>{
    await mongoose.connection.collection("dropdowns").deleteMany({});
    await mongoose.connection.close()
})

describe("Dropdown Routes", ()=>{
    let dropdownId

    it("should create a new dropdown", async ()=>{
        const res = await request(app)
        .post("/dropdowns")
        .send({heading:"Test Heading"})
        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("dropdown")
        dropdownId = res.body.dropdown._id
    })

    it("shpould fetch all dropdowns", async ()=>{
        const res = await request(app).get("/dropdowns")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a dropdown by Id", async ()=>{
        const res = await request(app).get(`/dropdowns/${dropdownId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("heading", "Test Heading")
    })

    it("should update a dropdown", async()=>{
        const res = await request(app)
        .put(`/dropdowns/${dropdownId}`)
        .send({heading :"Updated Heading"})
        expect(res.statusCode).toBe(200)
        expect(res.body.updateDropdown.heading).toBe("Updated Heading")
    })

    it("should delete a dropdown", async()=>{
        const res = await request(app).delete(`/dropdowns/${dropdownId}`)
        expect(res.statusCode).toBe(200)
    })
})