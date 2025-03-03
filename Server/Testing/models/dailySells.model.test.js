const mongoose = require("mongoose");
const { DailySell } = require("../../models/dailySells.model");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { dbName: "testDB" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("DailySell Model Test", () => {
  it("should create and save a DailySell item successfully", async () => {
    const dailySellData = {
      img: "https://example.com/product.jpg",
      category: "Electronics",
      title: "Smartphone",
      description: "Latest model smartphone",
      price: "999",
      originalPrice: "1199",
      rating: 4.5,
      buttonText: "Buy Now",
      timer: {
        days: 2,
        hours: 12,
        mins: 30,
        secs: 45,
      },
    };

    const dailySell = new DailySell(dailySellData);
    const savedDailySell = await dailySell.save();

    expect(savedDailySell._id).toBeDefined();
    expect(savedDailySell.title).toBe(dailySellData.title);
    expect(savedDailySell.price).toBe(dailySellData.price);
  });

  it("should fail validation if required fields are missing", async () => {
    const dailySell = new DailySell({}); // Missing required fields

    let err;
    try {
      await dailySell.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.img).toBeDefined();
    expect(err.errors.title).toBeDefined();
    expect(err.errors.buttonText).toBeDefined();
  });

  it("should set default values correctly", async () => {
    const dailySellData = {
      img: "https://example.com/default.jpg",
      title: "Basic Product",
      buttonText: "Shop Now",
    };

    const dailySell = new DailySell(dailySellData);
    const savedDailySell = await dailySell.save();

    expect(savedDailySell.category).toBe("General"); // Default category
    expect(savedDailySell.timer.days).toBe(0); // Default timer
  });

  it("should enforce rating range (0-5)", async () => {
    const invalidDailySell = new DailySell({
      img: "https://example.com/rating.jpg",
      title: "Rating Test",
      buttonText: "Test",
      rating: 6, // Invalid rating
    });

    let err;
    try {
      await invalidDailySell.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.rating).toBeDefined();
  });
});
