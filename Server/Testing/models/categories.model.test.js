const mongoose = require("mongoose");
const { Category } = require("../../models/categories.model");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterEach(async () => {
    await Category.deleteMany(); // ✅ Clear data after each test
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});

describe("Category Model", () => {
    test("should save a category successfully", async () => {
        const categoryData = { img: "https://example.com/image.jpg", title: "Electronics" };
        const category = new Category(categoryData);
        const savedCategory = await category.save();

        expect(savedCategory._id).toBeDefined();
        expect(savedCategory.img).toBe(categoryData.img);
        expect(savedCategory.title).toBe(categoryData.title);
    });

    test("should throw validation error if 'img' is missing", async () => {
        expect.assertions(2); // ✅ Ensure Jest waits for async errors
        try {
            await new Category({ title: "Electronics" }).save();
        } catch (error) {
            expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
            expect(error.errors.img).toBeDefined();
        }
    });

    test("should throw validation error if 'title' is missing", async () => {
        expect.assertions(2); // ✅ Ensure Jest waits for async errors
        try {
            await new Category({ img: "https://example.com/image.jpg" }).save();
        } catch (error) {
            expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
            expect(error.errors.title).toBeDefined();
        }
    });

    test("should fetch all categories", async () => {
        await Category.create({ img: "https://example.com/image1.jpg", title: "Fashion" });
        await Category.create({ img: "https://example.com/image2.jpg", title: "Home Decor" });

        const categories = await Category.find();
        expect(categories.length).toBe(2);
    });

    test("should delete a category", async () => {
        const category = await Category.create({ img: "https://example.com/image.jpg", title: "Toys" });

        await Category.deleteOne({ _id: category._id });
        const deletedCategory = await Category.findById(category._id);

        expect(deletedCategory).toBeNull();
    });
});
