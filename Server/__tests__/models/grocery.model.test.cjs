const mongoose = require("mongoose")
const {Grocery} = require("../../models/grocery.model")
require("../../tests/setupTestDB")

describe("Grocery Model",()=>{
    test("should create a grocery document successfully", async()=>{
        const validGrocery = new Grocery({
            img:"https://example.com/image.jpg",
            title:"Organic Apples",
            offer:"20% off"
        })

        const savedGrocery = await validGrocery.save()
        expect(savedGrocery._id).toBeDefined()
        expect(savedGrocery.img).toBe("https://example.com/image.jpg")
        expect(savedGrocery.title).toBe("Organic Apples")
        expect(savedGrocery.offer).toBe("20% off")
    })

    test("should enforce required fields",async ()=>{
        const invalidGrocery = new Grocery({})
        await expect(invalidGrocery.validate()).rejects.toThrow(mongoose.Error.ValidationError)
    })
})