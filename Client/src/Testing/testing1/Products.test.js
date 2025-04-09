import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import React from "react";
import Products from "../../components/Products";
import { getProducts } from "../../api/api.service";
import { useCart } from "../../contexts/CartContext";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";


jest.mock("../../api/api.service", () => ({
    getProducts: jest.fn(),
}));

jest.mock("../../contexts/CartContext", () => ({
    useCart: jest.fn(),
}));

describe("Products Component", () => {
    beforeEach(() => {
        useCart.mockReturnValue({ addToCart: jest.fn() });
    });

    test("renders Products component correctly", async () => {
        getProducts.mockResolvedValueOnce([
            {
                _id: "1",
                name: "Test Product",
                price: 100,
                category: "Snacks & Munchies",
                rating: [4, 5],
                image: ["/test-image.jpg"],
                originalPrice: 120,
                offer: "20% OFF",
            },
        ]);

        render(
            <MemoryRouter>
                <Products />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());

        expect(screen.getByText("All Products")).toBeInTheDocument();
        expect(await screen.findByTestId("product-name")).toHaveTextContent("Test Product");
    });

    test("displays no products message when no products available", async () => {
        getProducts.mockResolvedValueOnce([]);

        render(
            <MemoryRouter>
                <Products />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());
        expect( await screen.findByText("No Products Available !!!")).toBeInTheDocument();
    });

    test("applies category filter correctly", async () => {
        getProducts.mockResolvedValueOnce([
            { _id: "1", name: "Test Product", category: "Snacks & Munchies", price: 50, rating: [4], image: ["/test.jpg"] },
            { _id: "2", name: "Another Product", category: "Bakery & Biscuits", price: 100, rating: [5], image: ["/test.jpg"] }
        ]);

        render(
            <MemoryRouter>
                <Products />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());


        fireEvent.click(screen.getByText(/Category/i));
        fireEvent.click(screen.getByText(/Snacks & Munchies/i));

        await waitFor(() => {
            const displayedProducts = screen.getAllByTestId("product-name").map((node) => node.textContent);
            expect(displayedProducts).toContain("Test Product");
            expect(displayedProducts.length).toBeGreaterThan(0);
        });
    });

    test("sorts products correctly", async () => {
        getProducts.mockResolvedValueOnce([
            { _id: "1", name: "Cheap Product", price: 50, image: ["/test.jpg"] },
            { _id: "2", name: "Expensive Product", price: 200, image: ["/test.jpg"] },
        ]);

        render(
            <MemoryRouter>
                <Products />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());


        fireEvent.click(screen.getByTestId("sort-dropdown"));
        fireEvent.click(screen.getByTestId("sort-low-to-high"));

        await waitFor(() => {
            const productNames = screen.getAllByTestId("product-name").map((node) => node.textContent);
            expect(productNames.length).toBe(2);
            expect(productNames).toEqual(["Cheap Product", "Expensive Product"]);
        });
    });

    test("adds product to cart when Add button is clicked", async () => {
        const addToCartMock = jest.fn();
        useCart.mockReturnValue({ addToCart: addToCartMock });

        getProducts.mockResolvedValueOnce([
            {
                _id: "1",
                name: "Test Product",
                price: 100,
                category: "Snacks & Munchies",
                rating: [4, 5],
                image: ["/test-image.jpg"],
            },
        ]);

        render(
            <MemoryRouter>
                <Products />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());

        const addButton = await screen.findByTestId("add-btn-1");
        fireEvent.click(addButton);

        expect(addToCartMock).toHaveBeenCalledWith(expect.objectContaining({ name: "Test Product" }));
    });
});