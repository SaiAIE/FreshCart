const mongoose = require("mongoose");
const { Dropdown } = require("../../models/dropdown.model");
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

describe("Dropdown Model Test", () => {
  it("should create and save a Dropdown successfully", async () => {
    const dropdownData = {
      heading: "Electronics",
      icon: "fa-solid fa-tv",
      options: ["Laptops", "Smartphones", "Tablets"],
      megaOptions: [
        { title: "Brands", items: ["Apple", "Samsung", "Dell"] },
        { title: "Accessories", items: ["Chargers", "Headphones"] },
      ],
      offer: {
        imgSrc: "https://example.com/offer.jpg",
        text: "Get 20% off on all laptops",
        buttonText: "Shop Now",
      },
      className: "dropdown-electronics",
    };

    const dropdown = new Dropdown(dropdownData);
    const savedDropdown = await dropdown.save();

    expect(savedDropdown._id).toBeDefined();
    expect(savedDropdown.heading).toBe(dropdownData.heading);
    expect(savedDropdown.options.length).toBe(3);
    expect(savedDropdown.megaOptions.length).toBe(2);
    expect(savedDropdown.offer.imgSrc).toBe(dropdownData.offer.imgSrc);
  });

  it("should fail validation if required fields are missing", async () => {
    const dropdown = new Dropdown({}); // Missing required fields

    let err;
    try {
      await dropdown.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.title).toBeUndefined(); // title is in MegaOptions, not required for Dropdown itself
  });

  it("should allow empty options and megaOptions", async () => {
    const dropdownData = {
      heading: "Accessories",
      icon: "fa-solid fa-headphones",
      options: [], // Empty options
      megaOptions: [], // Empty megaOptions
      offer: {
        imgSrc: "https://example.com/accessories-offer.jpg",
        text: "Free shipping on all accessories",
        buttonText: "Shop Now",
      },
      className: "dropdown-accessories",
    };

    const dropdown = new Dropdown(dropdownData);
    const savedDropdown = await dropdown.save();

    expect(savedDropdown.options.length).toBe(0);
    expect(savedDropdown.megaOptions.length).toBe(0);
  });

  it("should allow creating dropdown without an offer", async () => {
    const dropdownData = {
      heading: "Smart Home",
      icon: "fa-solid fa-home",
      options: ["Smart Lights", "Smart Speakers"],
      megaOptions: [
        { title: "Brands", items: ["Google", "Amazon", "Apple"] },
      ],
      className: "dropdown-smart-home",
    };

    const dropdown = new Dropdown(dropdownData);
    const savedDropdown = await dropdown.save();

    expect(savedDropdown.offer).toBeUndefined(); // Offer is optional
  });
});
