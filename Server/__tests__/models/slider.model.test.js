const mongoose = require("mongoose")
const {Slider} = require("../../models/slider.model")
require("../../tests/setupTestDB")

describe("Slider Model",()=>{
    test("should create a slider document successfully",async ()=>{
        const validSlider = new Slider({
            img:"http://example.com/image.jpg",
            tag:"New Arrival",
            heading:"Best Deals on Electronics",
            description:"Get up to 50% off",
            buttonText:"Shop Now"
        })

        const savedSlider = await validSlider.save()

        expect(savedSlider._id).toBeDefined()
        expect(savedSlider.img).toBe("http://example.com/image.jpg")
        expect(savedSlider.tag).toBe("New Arrival")
        expect(savedSlider.heading).toBe("Best Deals on Electronics"),
        expect(savedSlider.description).toBe("Get up to 50% off")
        expect(savedSlider.buttonText).toBe("Shop Now")
    })

    test("should enforce required fields", async()=>{
        const invalidSlider = new Slider({})
        await expect(invalidSlider.validate()).rejects.toThrow(mongoose.Error.ValidationError)
    })

    test("should use default value for buttonText if not possible", async()=>{
        const sliderWithoutButton = new Slider({
            img:"https://example.com/image.jpg",
            tag:"Limited offer",
            heading:"Huge Discount",
            description:"Save big on daly essentials"
        })

        const savedSlider = await sliderWithoutButton.save()
        expect(savedSlider.buttonText).toBe("Shop Now")
    })
})