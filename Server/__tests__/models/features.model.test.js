const mongooose = require("mongoose");
const { Features } = require("../../models/features.model");
const { default: mongoose } = require("mongoose");
require("../../tests/setupTestDB")

describe("Features Model", () => {
    test("shoudl create a features document successfully", async () => {
        const validFeature = new Features({
            icon: "https://example.com/icon.png",
            title: "Fast Delivery",
            description: "We deliver products within 24 hours"
        })

        const savedFeature = await validFeature.save()

        expect(savedFeature._id).toBeDefined()
        expect(savedFeature.icon).toBe("https://example.com/icon.png")
        expect(savedFeature.title).toBe("Fast Delivery")
        expect(savedFeature.description).toBe("We deliver products within 24 hours")
    })

    test("should enforce required fields", async () => {
        const invalidFeature = new Features({})

        let error
        try {
            await invalidFeature.validate()
        } catch (err) {
            error = err
        }

        expect(error).toBeDefined()
        expect(error.errors.icon).toBeDefined()
        expect(error.errors.title).toBeDefined()
        expect(error.errors.description).toBeDefined()
    })

    test("should allow only valid string types", async () => {
        const invalidFeature = new Features({
            icon: 123,
            title: { key: "invalid" },
            description: true
        })

        await expect(invalidFeature.validate()).rejects.toThrow(mongoose.Error.ValidationError)

    })
})