import React from "react";
import {render, screen} from "@testing-library/react"
import RatingBar from "../../../components2/Reviews/RatingBar";
import { ProgressBar } from "react-bootstrap";

describe("RatingBar Component",()=>{
    const mockRating = {star:5, percentage:80}

    test("renders RatingBar component correctly",()=>{
        render(<RatingBar index={1} rating={mockRating} loading={false}/>)
        expect(screen.getByText("5 ⭐")).toBeInTheDocument()
        expect(screen.getByText("80 %")).toBeInTheDocument()
    })

    test("displays loader when loading is true",()=>{
        render(<RatingBar index={1} rating={mockRating} loading={true}/>)
        expect(screen.getByTestId("loader")).toBeTruthy()
    })

    test("renders ProgressBar with correct percentage",()=>{
        render(<RatingBar index={1} rating={mockRating} loading={false}/>)
        const ProgressBar = screen.getByRole("progressbar")
        expect(ProgressBar).toBeInTheDocument()
    })
})