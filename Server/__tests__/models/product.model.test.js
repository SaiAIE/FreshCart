const mongoose = require("mongoose")
const {Product} = require("../../models/product.model")
require("../../tests/setupTestDB")

describe("Product Model",()=>{
    test("should create a product document successfully", async ()=>{
        const validProduct = new Product({
            image:["hrrps://example.com/image.jpg"],
            category:"Fruits",
            name:"Banana",
            rating:"4.5",
            price:"100",
            originalPrice:"120",
            offer:"10% off",
            offerValue:"10",
            reviews:[
                {
                    profile:"https://example.com/image.jpg",
                    reviewer:"John Doe",
                    date: new Date(),
                    verified:true,
                    mainComment:"Great Product!",
                    comment:"Really liked the quality",
                    images:["https://example.com/review1.jpg"],
                    helpful:true
                }
            ]
        })

        const savedProduct = await validProduct.save()

        expect(savedProduct._id).toBeDefined()
        expect(savedProduct.image.length).toBe(1)
        expect(savedProduct.category).toBe("Fruits")
        expect(savedProduct.name).toBe("Banana")
        expect(savedProduct.rating).toBe("4.5")
        expect(savedProduct.price).toBe("100")
        expect(savedProduct.originalPrice).toBe("120")
        expect(savedProduct.offer).toBe("10% off")
        expect(savedProduct.offerValue).toBe("10")
        expect(savedProduct.reviews.length).toBe(1)
        expect(savedProduct.reviews[0].reviewer).toBe("John Doe")

    })

    test("should enforce required fields", async()=>{
        const invalidProduct = new Product({})
        await expect(invalidProduct.validate()).rejects.toThrow(mongoose.Error.ValidationError)
    })
})