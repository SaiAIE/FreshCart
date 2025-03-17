const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const dailySellRoutes = require("../../routes/dailysells.routes");
const { DailySell } = require("../../models/dailySells.model");
 
const app = express();
app.use(express.json());
app.use("/dailySells", dailySellRoutes);
 
beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});
 
afterAll(async () => {
  await mongoose.connection.collection("dailysells").deleteMany({});
  await mongoose.connection.close();
});
 
describe("Daily Sells Routes", () => {
  let dailySellId;
 
  it("should create a new daily sell record", async () => {
    const res = await request(app)
      .post("/dailySells/")
      .send({img:"test.jpg", title:"test product", buttonText:"buy now"});
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("dailySell");
    dailySellId = res.body.dailySell._id;
  });
 
  it("should fetch all daily sell records", async () => {
    const res = await request(app).get("/dailySells");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
 
  it("should fetch a daily sell record by ID", async () => {
    const res = await request(app).get(`/dailySells/${dailySellId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("title", "test product");
  });
 
  it("should update a daily sell record", async () => {
    const res = await request(app)
      .put(`/dailySells/${dailySellId}`)
      .send({ title: "updated product" });
    expect(res.statusCode).toBe(200);
    expect(res.body.updateDailySell.title).toBe("updated product");
  });
 
  it("should delete a daily sell record", async () => {
    const res = await request(app).delete(`/dailySells/${dailySellId}`);
    expect(res.statusCode).toBe(200);
  });
});