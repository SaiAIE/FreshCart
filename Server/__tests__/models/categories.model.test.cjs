const mongoose= require("mongoose")
const {Category}= require("../../models/categories.model.js")
require("../../tests/setupTestDB.js")

describe("Category Model",()=>{
    test("should create a category successfully", async ()=>{
        const validCategory = new Category({
            img:"https://example.com/image.jpg",
            title:"Electronics"
        })

        const savedCategory = await validCategory.save()
        expect(savedCategory._id).toBeDefined()
        expect(savedCategory.img).toBe("https://example.com/image.jpg")
        expect(savedCategory.title).toBe("Electronics")
    })

    test("should fail to save category without required fields",async()=>{
        const invalidCategory = new Category({})

        let error;
        try{
            await invalidCategory.save()
        }
        catch(err){
            error = err
        }
        expect(error).toBeDefined()
        expect(error.errors.img).toBeDefined()
        expect(error.errors.title).toBeDefined()
    })

    test("should fail to save category without img field", async ()=>{
        const invalidCategory = new Category({title:"Fashion"})
        let error;
        try{
            await invalidCategory.save()
        }
        catch(err){
            error = err
        }
        expect(error).toBeDefined()
        expect(error.errors.img).toBeDefined()

    })

    test("should fail to save category without title field", async ()=>{
        const invalidCategory = new Category({img:"https://example.com/image.jpg"})
        let error;
        try{
            await invalidCategory.save()
        }
        catch(err){
            error = err
        }
        expect(error).toBeDefined()
        expect(error.errors.title).toBeDefined()

    })

})