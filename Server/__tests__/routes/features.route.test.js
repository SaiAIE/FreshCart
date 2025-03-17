const request = require("supertest")
const express = require("express")
const mongoose = require("mongoose")
const featureRoutes = require("../../routes/features.routes")
const {Features} = require("../../models/features.model")

const app = express()
app.use(express.json())
app.use("/features",featureRoutes)

beforeAll(async ()=>{
    await mongoose.connect("mongodb://localhost:27017/testdb",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
})
afterAll(async ()=>{
    await mongoose.connection.collection("features").deleteMany({});
    await mongoose.connection.close()
})

describe("Features Routes", ()=>{
    let featureId

    it("should create a new feature", async ()=>{
        const res = await request(app)
        .post("/features")
        .send({icon:"test-icon",title:"Test feature", description:"test description"})
        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty("feature")
        featureId = res.body.feature._id
    })

    it("shpould fetch all features", async ()=>{
        const res = await request(app).get("/features")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it("should fetch a feature by Id", async ()=>{
        const res = await request(app).get(`/features/${featureId}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("title", "Test feature")
    })

    it("should update a feature", async()=>{
        const res = await request(app)
        .put(`/features/${featureId}`)
        .send({title :"Updated feature"})
        expect(res.statusCode).toBe(200)
        expect(res.body.updateFeature.title).toBe("Updated feature")
    })

    it("should delete a feature", async()=>{
        const res = await request(app).delete(`/features/${featureId}`)
        expect(res.statusCode).toBe(200)
    })
})