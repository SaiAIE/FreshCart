const request = require("supertest")
const mongoose = require("mongoose")
const app = require("../index")

describe("Sevrer Routes",()=>{
    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
    })

    afterAll(async ()=>{
        await mongoose.connection.close()
    })


    it("should return 200 for dropdown routes", async ()=>{
        const res = await request(app).get("/api/dropdowns")
        expect(res.statusCode).toBe(200)
    })
    it("should return 200 for slider routes", async ()=>{
        const res = await request(app).get("/api/slider")
        expect(res.statusCode).toBe(200)
    })
    it("should return 200 for category routes", async ()=>{
        const res = await request(app).get("/api/category")
        expect(res.statusCode).toBe(200)
    })
    it("should return 200 for grocery routes", async ()=>{
        const res = await request(app).get("/api/grocery")
        expect(res.statusCode).toBe(200)
    })
    it("should return 200 for features routes", async ()=>{
        const res = await request(app).get("/api/features")
        expect(res.statusCode).toBe(200)
    })
    it("should return 200 for daily sells routes", async ()=>{
        const res = await request(app).get("/api/dailySells")
        expect(res.statusCode).toBe(200)
    })
    it("should return 200 for footer routes", async ()=>{
        const res = await request(app).get("/api/footer")
        expect(res.statusCode).toBe(200)
    })
    it("should return 200 for product routes", async ()=>{
        const res = await request(app).get("/api/product")
        expect(res.statusCode).toBe(200)
    })
})