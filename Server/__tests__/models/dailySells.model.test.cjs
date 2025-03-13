const mongoose = require("mongoose")
const { DailySell } = require("../../models/dailySells.model")
require("../../tests/setupTestDB")

describe("DailySell Model", () => {
    test("should create a Daily Sell succesfully", async () => {
        const validDailySell = new DailySell({
            img: "https://example.com/image.jpg",
            category: "Electronics",
            title: "Smartphone",
            description: "Latest Model",
            price: "999",
            originalPrice: "1199",
            rating: 4.5,
            buttonText: "Buy Now",
            timer: {
                days: 1,
                hours: 10,
                mins: 30,
                secs: 45
            }
        })

        const savedDailySell = await validDailySell.save()
        expect(savedDailySell._id).toBeDefined()
        expect(savedDailySell.img).toBe("https://example.com/image.jpg")
        expect(savedDailySell.category).toBe("Electronics")
        expect(savedDailySell.title).toBe("Smartphone")
        expect(savedDailySell.price).toBe("999")
        expect(savedDailySell.originalPrice).toBe("1199")
        expect(savedDailySell.rating).toBe(4.5)
        expect(savedDailySell.buttonText).toBe("Buy Now")
        expect(savedDailySell.timer.days).toBe(1)
        expect(savedDailySell.timer.hours).toBe(10)
        expect(savedDailySell.timer.mins).toBe(30)
        expect(savedDailySell.timer.secs).toBe(45)
    })

    test("should use default values for timer if not provided", async () => {
        const dailySellWithDefaults = new DailySell({
            img: "https://example.com/product.jpg",
            title: "Laptop",
            buttonText: "Add To Cart"
        })

        const savedDailySell = await dailySellWithDefaults.save()
        expect(savedDailySell.timer.days).toBe(0)
        expect(savedDailySell.timer.hours).toBe(0)
        expect(savedDailySell.timer.mins).toBe(0)
        expect(savedDailySell.timer.secs).toBe(0)
    })

    test("should fail to save DailySell without required fields", async () => {
        const invalidDailySell = new DailySell({})

        let error;
        try {
            await invalidDailySell.save()
        } catch (err) {
            error = err
        }

        expect(error).toBeDefined()
        expect(error.errors.img).toBeDefined()
        expect(error.errors.title).toBeDefined()
        expect(error.errors.buttonText).toBeDefined()
    })

    test("should enforce rating range between 0 and 5", async () => {
        let error
        try {
            const invalidRating = new DailySell({
                img: "https://example.com/image.jpg",
                title: "Smartphone",
                rating: 10,
                buttonText: "Buy Now",
            })
            await invalidRating.save()
        }catch(err){
            error = err
        }

        expect(error).toBeDefined()
        expect(error.errors.rating).toBeDefined()
    })
})