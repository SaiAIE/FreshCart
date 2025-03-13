const mongoose = require("mongoose")
const {Footer} = require("../../models/footer.model")
require("../../tests/setupTestDB")

describe("Footer Model",()=>{
    test("should create a footer document successfully",async ()=>{
        const validFooter = new Footer({
            heading:"Company",
            items:["About Us","Careers", "Contact"]
        })

        const savedFooter = await validFooter.save()

        expect(savedFooter._id).toBeDefined()
        expect(savedFooter.heading).toBe("Company")
        expect(savedFooter.items).toEqual(["About Us","Careers","Contact"])
    })

    test("should enforce required fields", async ()=>{
        const invalidFooter = new Footer({})
        await expect(invalidFooter.validate()).rejects.toThrow(mongoose.Error.ValidationError)
    })

    test("should enforce required items array", async () => {
        try {
            const invalidFooter = new Footer({
                heading: "Help",
                items: undefined 
            });
            await invalidFooter.validate();
        } catch (error) {
            expect(error).toBeDefined();
            expect(error.errors.items).toBeDefined();
        }
    });
    
    test("should fail if items array contains non-strings", async () => {
        try {
            const invalidFooter = new Footer({
                heading: "Help",
                items: [true, { key: "invalid" }] 
            });
            await invalidFooter.validate();
        } catch (error) {
            expect(error).toBeDefined();
            expect(error.errors.items).toBeDefined(); 
        }
    });
    

    test("should only allow valid string types", async ()=>{
        const invalidFooter = new Footer({
            heading: 123,
            items: [true,{key:"invalid"}]
        })
        await expect(invalidFooter.validate()).rejects.toThrow(mongoose.Error.ValidationError)
    })
})