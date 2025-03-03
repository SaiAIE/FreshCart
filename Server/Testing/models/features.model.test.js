const mongoose = require("mongoose");
const { Features } = require("../../models/features.model");
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

describe("Features Model Test", () => {
  it("should create and save a Feature successfully", async () => {
    const featureData = {
      icon: "fa-solid fa-star",
      title: "Fast Delivery",
      description: "We ensure quick and reliable delivery for all orders.",
    };

    const feature = new Features(featureData);
    const savedFeature = await feature.save();

    expect(savedFeature._id).toBeDefined();
    expect(savedFeature.icon).toBe(featureData.icon);
    expect(savedFeature.title).toBe(featureData.title);
    expect(savedFeature.description).toBe(featureData.description);
  });

  it("should fail validation if required fields are missing", async () => {
    const feature = new Features({}); // Missing required fields

    let err;
    try {
      await feature.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.icon).toBeDefined();
    expect(err.errors.title).toBeDefined();
    expect(err.errors.description).toBeDefined();
  });
});
