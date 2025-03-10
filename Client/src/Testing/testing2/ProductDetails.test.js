import React from "react"
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import ProductDetails from "../../components2/ProductDetails"
import { useCart } from "../../contexts/CartContext"
import { getProductById, getProducts } from "../../api/api.service"

jest.mock("../../api/api.service", () => ({
    getProductById: jest.fn(),
    getProducts: jest.fn().mockResolvedValue([])
}))

jest.mock("../../contexts/CartContext", () => ({
    useCart: jest.fn()
}))

describe("ProductDetail Component", () => {
    const mockAddToCart = jest.fn()

    beforeEach(() => {
        useCart.mockReturnValue({ addToCart: mockAddToCart })
        jest.spyOn(console, "error").mockImplementation(() => { })
    })

    afterEach(() => {
    })

    test('renderd loading skeleton initially', async () => {
        getProductById.mockResolvedValueOnce({})

        render(
            <MemoryRouter initialEntries={["/product/1"]}>
                <Routes>
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </MemoryRouter>
        )

        expect(screen.getByText("Shop")).toBeInTheDocument()
    })

    test("fetches and displays product details", async () => {
        const mockProduct = {
            _id: "1",
            name: "Test Product",
            category: "Electronics",
            price: "$199",
            originalPrice: "$249",
            rating: "4.5",
            reviews: ["Great Product"],
            image: ["/test/jpg"],
            details: { productCode: "12345", availability: "In Stock", type: "Gadget", shipping: "Free" },
        }

        getProductById.mockResolvedValueOnce(mockProduct)

        render(
            <MemoryRouter initialEntries={["/product/1"]}>
                <Routes>
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </MemoryRouter>
        )

        await waitFor(() => expect(screen.getByText("Test Product")).toBeInTheDocument())
        expect(screen.getByText("Electronics")).toBeInTheDocument()
        expect(screen.getByText("$199")).toBeInTheDocument()
        expect(screen.getByText("4.5")).toBeInTheDocument()
        expect(screen.getByText("(1 reviews)")).toBeInTheDocument()
    })

    test("calls addToCart when 'Add To Cart' button is clicked", async () => {
        const mockProduct = {
            _id: "1",
            name: "Test Product",
            price: "$199",
            image: ["/test/jpg"],
            details: { quantity: [1, 2, 3] }
        }

        getProductById.mockResolvedValueOnce(mockProduct)

        render(
            <MemoryRouter initialEntries={["/product/1"]}>
                <Routes>
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </MemoryRouter>
        )

        await waitFor(() => expect(screen.getByText("Test Product")).toBeInTheDocument())

        const addToCartButton = screen.getByText(/Add To Cart/i)
        fireEvent.click(addToCartButton)

        expect(mockAddToCart).toHaveBeenCalledWith(mockProduct, 1)
    })

    test("displays error message if API call fails", async () => {
        getProductById.mockRejectedValueOnce(new Error("Failed to fetch Product"))

        render(
            <MemoryRouter initialEntries={["/product/1"]}>
                <Routes>
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </MemoryRouter>
        )

        await waitFor(() => {
            expect(screen.getByText("Shop")).toBeInTheDocument()
        })

        await waitFor(() => {
        })
    })

})