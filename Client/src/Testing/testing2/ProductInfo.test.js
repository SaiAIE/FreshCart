import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import ProductInfo from "../../components2/ProductInfo";

describe("ProductInfo Component", ()=>{
    const mockProduct={
        details:{
            productDetails:{heading:"Product Details", description:"This is a sample product."},
            information: {weight:"500gm", ingredientType:"Vegetarian"},
            seller:{description: "Sold by Sample Seller"}
        },
        rating: 4.5,
        reviews: [{user:"John Doe", comment:"Great Product!!!"}]
    }

    test("renders Prodcut Details tab by default",()=>{
        render(<ProductInfo product={mockProduct} loading={false}/>)
        expect(screen.getAllByText("Product Details")[0]).toBeInTheDocument()
        expect(screen.getByText("This is a sample product.")).toBeInTheDocument()
    })

    test("show skeleton loader when loading",()=>{
        const {container} = render(<ProductInfo product={mockProduct} loading={true}/>)
        expect(container.querySelectorAll(".product-info__skeleton-container").length).toBeGreaterThan(0)
    })

    test("switches to information tab",()=>{
        render(<ProductInfo product={mockProduct} loading={false}/>)
        const infoTab = screen.getByText("Information")
        fireEvent.click(infoTab)
        expect(screen.getByText("Weight")).toBeInTheDocument()
        expect(screen.getByText("500gm")).toBeInTheDocument()
    })

    test("switches to Reviews Tab",()=>{
        render(<ProductInfo product={mockProduct} loading={false} />)
        const reviewsTab = screen.getByText("Reviews")
        fireEvent.click(reviewsTab)
        expect(screen.getByText("Customer Reviews")).toBeInTheDocument()
        expect(screen.getAllByText("4.5")[0]).toBeInTheDocument()
    })

    test("switches to seller tab",()=>{
        render(<ProductInfo product={mockProduct} loading={false} />)
        const sellerTab = screen.getByText("Seller")
        fireEvent.click(sellerTab)
        expect(screen.getByText("Sold by Sample Seller")).toBeInTheDocument()
    })
})