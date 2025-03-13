const mongoose = require("mongoose")
const {Dropdown} = require("../../models/dropdown.model")
require("../../tests/setupTestDB")

describe("Dropdown Model",()=>{
    test("should create a Dropdown successfully",async ()=>{
        const validDropdown = new Dropdown({
            heading : "Categories",
            icon: "category-icon.png",
            options:["Electronics","Fashion","Home Appliances"],
            megaOptions :[
                {
                    title:"Smartphone",
                    items: ["iPhone", "Samsung Galaxy","OnePlus"]
                },
                {
                    title:"Laptops",
                    items: ["MacBook", "Dell XPS","HP Spectre"]
                },
            ],
            offer:{
                imgSrc:"https://example.com/offer.jpg",
                test:"Special Discount",
                buttonText:"Shop Now"
            },
            className:"dropdown-menu"
        })

        const savedDropdown = await validDropdown.save()

        expect(savedDropdown._id).toBeDefined()
        expect(savedDropdown.heading).toBe("Categories")
        expect(savedDropdown.icon).toBe("category-icon.png")
        expect(savedDropdown.options.length).toBe(3)
        expect(savedDropdown.options[1]).toBe("Fashion")
        expect(savedDropdown.megaOptions.length).toBe(2)
        expect(savedDropdown.megaOptions[0].title).toBe("Smartphone")
        expect(savedDropdown.offer.imgSrc).toBe("https://example.com/offer.jpg")
        expect(savedDropdown.className).toBe("dropdown-menu")
    })

    test("should enforce required fields",async()=>{
        const invalidDropdown = new Dropdown({})
        let error
        try{
            await invalidDropdown.save()
        }
        catch(err){
            error=err
        }

        expect(error).toBeDefined()
        expect(error.errors.heading).toBeDefined()
    })

    test("should create a dropdown without optional fileds",async ()=>{
        const minimalDropdown = new Dropdown({
            heading :"Essentails",
            options:["Groceries","Stationary"]
        })

        const savedDropdown = await minimalDropdown.save()

        expect(savedDropdown._id).toBeDefined()
        expect(savedDropdown.heading).toBe("Essentails")
        expect(savedDropdown.options.length).toBe(2)
        expect(savedDropdown.megaOptions.length).toBe(0)
        expect(savedDropdown.offer).toBeUndefined()
    })
})