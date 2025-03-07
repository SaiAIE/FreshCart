import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import React from "react";
import PopularProducts from "../../components/PopularProducts";
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

describe("PopularProducts Component", () => {
    beforeEach(() => {
        useCart.mockReturnValue({ addToCart: jest.fn() });
        jest.clearAllMocks();
    });

    test("renders PopularProducts component correctly", async () => {
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
                <PopularProducts />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());

        expect(screen.getByText("Popular Products")).toBeInTheDocument();
        expect(await screen.findByText("Test Product")).toBeInTheDocument();
    });

    test("shows loading skeleton while fetching products", async () => {
        getProducts.mockReturnValueOnce(new Promise(() => { }));

        render(
            <MemoryRouter>
                <PopularProducts />
            </MemoryRouter>
        );

        expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0);
    });

    test("displays no products message when no products available", async () => {
        getProducts.mockResolvedValueOnce([]);

        render(
            <MemoryRouter>
                <PopularProducts />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());
        expect(await screen.findByTestId("noproducts")).toBeInTheDocument();
    });

    test("renders correct number of products based on screen size", async () => {
        getProducts.mockResolvedValueOnce(
            new Array(12).fill({
                _id: "1",
                name: "Test Product",
                price: 100,
                category: "Snacks & Munchies",
                rating: [4, 5],
                image: ["/test-image.jpg"],
            })
        );

        render(
            <MemoryRouter>
                <PopularProducts />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());


        Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 1024 });
        window.dispatchEvent(new Event("resize"));

        await waitFor(() => {
            const displayedProducts = screen.getAllByTestId("product-item")
            expect(displayedProducts.length).toBeLessThanOrEqual(10)
        });

        render(
            <MemoryRouter>
                <PopularProducts />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());

        Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 600 });
        window.dispatchEvent(new Event("resize"));

        await waitFor(() => {
            const displayedProducts = screen.getAllByTestId("product-item")
            // expect(displayedProducts.length).toBeLessThanOrEqual(8)
        })
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
                <PopularProducts />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());

        const addButton = await screen.findByText("+ Add");
        fireEvent.click(addButton);

        expect(addToCartMock).toHaveBeenCalledWith(expect.objectContaining({ name: "Test Product" }));
    });
});