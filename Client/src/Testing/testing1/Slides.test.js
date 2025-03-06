import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react"
import Slides from "../../components/Slides";
import { getSliders } from "../../api/api.service";
import "@testing-library/jest-dom"

jest.mock("../../api/api.service.js",()=>({
    getSliders: jest.fn(()=> Promise.resolve({data:[]}))
}))

describe("Slides Component",()=>{
    test("shows loading skeleton while fetching data",async()=>{
        getSliders.mockResolvedValueOnce({data:[]})
        render(<Slides/>)
        expect(screen.getAllByTestId("loading-skelton").length).toBeGreaterThan(0)
        await waitFor(()=> expect(screen.queryByTestId("loading-skeleton")).not.toBeInTheDocument())
    })

    test("displays slides when API call is successfull", async()=>{
        const mockData=[
            {
                buttonText: "Shop Now",
                description: "Introduced a new model for online grocery shopping and conveient home delivery",
                heading:"SuperMarket For Fresh Grocery",
                img:"https://freshcart-next-js.vercel.app/images/slider/slide-1.jpg",
                tag:"Opening Sale Discount 10%",
                _id: "67b5f5abfe18e000e3f17808"
            },
            {
                buttonText: "Shop Now",
                description: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
                heading:"Free Shipping on orders over $100",
                img:"https://freshcart-next-js.vercel.app/images/slider/slide-2.jpg",
                tag:"Free Shipping - orders over $100",
                _id: "67b5f5abfe18e000e3f17809",
            }
        ]

        getSliders.mockResolvedValueOnce({data:mockData})
        render(<Slides/>)
        await waitFor(()=>expect(screen.getByText("SuperMarket For Fresh Grocery")).toBeInTheDocument())
        expect(screen.getAllByTestId("slide-img").length).toBe(mockData.length)
        expect(screen.getAllByText("Shop Now").length).toBe(mockData.length)
    })

    test("renders correct number of navigation dots",async()=>{
        const mockData=[
            {
                buttonText: "Shop Now",
                description: "Introduced a new model for online grocery shopping and conveient home delivery",
                heading:"SuperMarket For Fresh Grocery",
                img:"https://freshcart-next-js.vercel.app/images/slider/slide-1.jpg",
                tag:"Opening Sale Discount 10%",
                _id: "67b5f5abfe18e000e3f17808"
            },
            {
                buttonText: "Shop Now",
                description: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
                heading:"Free Shipping on orders over $100",
                img:"https://freshcart-next-js.vercel.app/images/slider/slide-2.jpg",
                tag:"Free Shipping - orders over $100",
                _id: "67b5f5abfe18e000e3f17809",
            }
        ]
        getSliders.mockResolvedValueOnce({data:mockData})
        render(<Slides/>)
        await waitFor(()=>expect(screen.getAllByTestId("slider-dot").length).toBe(mockData.length))
    })

    test("clicking on dots updates the active slide",async ()=>{
        const mockData=[
            {
                buttonText: "Shop Now",
                description: "Introduced a new model for online grocery shopping and conveient home delivery",
                heading:"SuperMarket For Fresh Grocery",
                img:"https://freshcart-next-js.vercel.app/images/slider/slide-1.jpg",
                tag:"Opening Sale Discount 10%",
                _id: "67b5f5abfe18e000e3f17808"
            },
            {
                buttonText: "Shop Now",
                description: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
                heading:"Free Shipping on orders over $100",
                img:"https://freshcart-next-js.vercel.app/images/slider/slide-2.jpg",
                tag:"Free Shipping - orders over $100",
                _id: "67b5f5abfe18e000e3f17809",
            }
        ]

        getSliders.mockResolvedValueOnce({data:mockData})
        render(<Slides/>)
        await waitFor(()=>expect(screen.getAllByTestId("slider-dot").length).toBe(mockData.length))
        const dots = screen.getAllByTestId("slider-dot")
        fireEvent.click(dots[1])
        await waitFor(()=>expect(screen.getByText("SuperMarket For Fresh Grocery")).toBeInTheDocument())
    })
})