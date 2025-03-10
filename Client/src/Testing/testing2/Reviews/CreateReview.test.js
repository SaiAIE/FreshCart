import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import CreateReview from "../../../components2/Reviews/CreateReview";

describe("CreateReview Component",()=>{
    const mockProduct = {
        rating:4.5
    }

    test('renders Create Review section', () => {
      render(<CreateReview product={mockProduct}/>)
      expect(screen.getByText("Create Review")).toBeInTheDocument()
    })

    test("displays product rating",()=>{
        render(<CreateReview product={mockProduct}/>)
        expect(screen.getAllByText("4.5").length).toBeGreaterThan(0)
    })

    test("renders all rating categories",()=>{
        render(<CreateReview product={mockProduct}/>)
        expect(screen.getByText("Flavor")).toBeInTheDocument()
        expect(screen.getByText("Value for money")).toBeInTheDocument()
        expect(screen.getByText("Scent")).toBeInTheDocument()
    })

    test("allows user to enter a review headline",()=>{
        render(<CreateReview product={mockProduct}/>)
        const input = screen.getByPlaceholderText("What's most important to know")
        fireEvent.change(input, {target:{value:"Great Product!"}})
    })

    test("allows user to write a review",()=>{
        render(<CreateReview product={mockProduct}/>)
        const textarea = screen.getByPlaceholderText("What did you like or dislike? What did you use this product for?")
        fireEvent.change(textarea,{target:{value:"This Product is amazing!"}})
        expect(textarea.value).toBe("This Product is amazing!")
    })

    test("Submit Review Button is clickable",()=>{
        render(<CreateReview product={mockProduct}/>)
        const submitButton = screen.getByText("Submit Review")
        fireEvent.click(submitButton)
        expect(submitButton).toBeInTheDocument()
    })
    
})