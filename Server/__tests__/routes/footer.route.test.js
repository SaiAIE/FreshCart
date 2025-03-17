const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const footerRoutes = require("../../routes/footer.routes")
const {Footer} = require("../../models/footer.model")

const app = express()
app.use(express.json())
app.use("/footer",footerRoutes)

beforeAll(async ()=>{
    await mongoose.connect("mongodb://localhost:27017/testdb",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
})
afterAll(async ()=>{
    await mongoose.connection.collection("footers").deleteMany({});
    await mongoose.connection.close()
})

describe("Footer Routes", ()=>{
    let footerId

    it("should create a new footer", async ()=>{
        const res = await request(app)
        .post("/footer")
        .send({heading:"Test footer", items:["item 1", "item 2"]})
        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("footer")
        footerId = res.body.footer._id
    })

    it("shpould fetch all footers", async ()=>{
        const res = await request(app).get("/footer")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a footer by Id", async ()=>{
        const res = await request(app).get(`/footer/${footerId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("heading", "Test footer")
    })

    it("should update a footer", async()=>{
        const res = await request(app)
        .put(`/footer/${footerId}`)
        .send({heading :"Updated footer"})
        expect(res.statusCode).toBe(200)
        expect(res.body.updateFooter.heading).toBe("Updated footer")
    })

    it("should delete a footer", async()=>{
        const res = await request(app).delete(`/footer/${footerId}`)
        expect(res.statusCode).toBe(200)
    })
})