import React from "react";
import {render, screen} from "@testing-library/react"
import ReviewItem from "../../../components2/Reviews/ReviewItem";

describe("ReviewItem Component",()=>{
    const mockReview = {
        reviewer:"John Doe",
        date:"2024-03-10T10:00:00z",
        verified:true,
        mainComment: "Amazing Product!",
        comment:"Really loved the quality and performance.",
        profile:"http://via.placeholder.com/30",
        images:["http://via.placeholder.com/50","http://via.placeholder.com/50"]
    }

    const mockProduct ={
        rating: 4.5
    }

    test("renders review details correctly",()=>{
        render(<ReviewItem index={1} review={mockReview} product={mockProduct}/>)
        expect(screen.getByText("John Doe")).toBeInTheDocument()
        expect(screen.getByText("10 March 2024")).toBeInTheDocument()
        expect(screen.getByText("Verified Purchase")).toBeInTheDocument()
        expect(screen.getByText("Amazing Product!")).toBeInTheDocument()
        expect(screen.getByText("Really loved the quality and performance.")).toBeInTheDocument()
        expect(screen.getByText("4.5")).toBeInTheDocument()
    })

    test("renders review images when available",()=>{
        render(<ReviewItem index={1} review={mockReview} product={mockProduct}/>)
        const images = screen.getAllByAltText("review image")
        expect(images.length).toBe(2)
    })

    test("renders helpful and report button",()=>{
        render(<ReviewItem index={1} review={mockReview} product={mockProduct}/>)
        expect(screen.getByText("Helpful")).toBeInTheDocument()
        expect(screen.getByText("Report Abuse")).toBeInTheDocument()
    })

    test("renders Unverified Purchase if review is not verified",()=>{
        const unverfiedReview = {...mockReview, verified:false}
        render(<ReviewItem index={1} review={unverfiedReview} product={mockProduct}/>)
        expect(screen.getByText("Unverified Purchase")).toBeInTheDocument()
    })
})