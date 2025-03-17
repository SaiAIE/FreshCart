const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("../../routes/categories.routes");
const { Category } = require("../../models/categories.model");

const app = express();
app.use(express.json());
app.use("/categories", categoryRoutes);

beforeAll(async () => {
    await mongoose.connect("mongodb://localhost:27017/testdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.collection("categories").deleteMany({});
    await mongoose.connection.close();
});

describe("Category Routes", () => {
    let categoryId;

    it("should create a new category", async () => {
        const res = await request(app)
            .post("/categories")
            .send({ img: "test.jpg", title: "Test Category" });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("category");
        categoryId = res.body.category._id;
    });

    it("should fetch all categories", async () => {
        const res = await request(app).get("/categories");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("should fetch a category by ID", async () => {
        const res = await request(app).get(`/categories/${categoryId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("title", "Test Category");
    });

    it("should update a category", async () => {
        const res = await request(app)
            .put(`/categories/${categoryId}`)
            .send({ title: "Updated Category" });
        expect(res.statusCode).toBe(200);
        expect(res.body.updateCategory.title).toBe("Updated Category");
    });

    it("should delete a category", async () => {
        const res = await request(app).delete(`/categories/${categoryId}`);
        expect(res.statusCode).toBe(200);
    });
});