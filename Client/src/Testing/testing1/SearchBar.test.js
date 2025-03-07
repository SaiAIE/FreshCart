import {render, screen, fireEvent,waitFor } from "@testing-library/react"
import React from "react"
import SearchBar from "../../components/SearchBar"
import { useCart } from "../../contexts/CartContext"
import { getDropdowns } from "../../api/api.service"
import "@testing-library/jest-dom"

jest.mock("../../contexts/CartContext",()=>({
    useCart: jest.fn(),
}))

jest.mock("../../api/api.service",()=>({
    getDropdowns: jest.fn(),
}))

describe("Searchbar Component",()=>{
    beforeEach(()=>{
        useCart.mockReturnValue({cart:[]})
    })

    test("renders Searchbar correctly",()=>{
        render(<SearchBar/>)
        expect(screen.getAllByPlaceholderText("Search for products").length).toBeGreaterThan(0)
        expect(screen.getByRole("button",{name:/location/i})).toBeInTheDocument()
    })

    test("toggles sidebar when menu icon is clicked",()=>{
        render(<SearchBar/>)
        const menuIcon = screen.getByTestId("searchbar__menu-icon")
        expect(screen.getByRole("complementary",{hidden:true})).not.toHaveClass("searchbar__sidebar--open")
        fireEvent.click(menuIcon)
        expect(screen.getByRole("complementary")).toHaveClass("searchbar__sidebar--open")
    })

    test("displays loading indicator when fetching dropdown data",async()=>{
        getDropdowns.mockResolvedValueOnce({data:[]})
        render(<SearchBar/>)
        expect(screen.getByTestId("loader")).toBeInTheDocument()
        await waitFor(()=>expect(screen.queryByTestId("loader")).not.toBeInTheDocument())
    })

    test("handles API Error and displays error message",async()=>{
        getDropdowns.mockRejectedValueOnce(new Error("Network Error"))
        render(<SearchBar/>)
        await waitFor (()=>{
            expect(screen.getByText("Please Try Again Later !!!")).toBeInTheDocument()
        })
    })

    test("opens cart when cart icon is clicked", async () => {

        render(<SearchBar />);
        const cartIcon = screen.getByTestId("cart-icon");
        expect(screen.queryByTestId("cart-component")).not.toBeInTheDocument();
        fireEvent.click(cartIcon);
        await waitFor(() => {
            expect(screen.getByTestId("cart-component")).toBeInTheDocument();
        });
    });
    
     
})

