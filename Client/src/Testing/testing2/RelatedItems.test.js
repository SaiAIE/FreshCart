import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import React from "react";
import RelatedItems from "../../components2/RelatedItems";
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

describe("RelatedItems Component", () => {
    beforeEach(() => {
        useCart.mockReturnValue({ addToCart: jest.fn() });
        jest.clearAllMocks();
    });

    test("renders RelatedItems component correctly", async () => {
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
                <RelatedItems />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());

        expect(screen.getByText("Related Items")).toBeInTheDocument();
        expect(await screen.findByText("Test Product")).toBeInTheDocument();
    });

    test("shows loading skeleton while fetching products", async () => {
        getProducts.mockReturnValueOnce(new Promise(() => { }));

        render(
            <MemoryRouter>
                <RelatedItems />
            </MemoryRouter>
        );

        expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0);
    });

    test("displays no products message when no products available", async () => {
        getProducts.mockResolvedValueOnce([]);

        render(
            <MemoryRouter>
                <RelatedItems />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());
        expect(await screen.findByTestId("noproducts")).toBeInTheDocument();
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
                <RelatedItems />
            </MemoryRouter>
        );

        await waitFor(() => expect(getProducts).toHaveBeenCalled());

        const addButton = await screen.findByText("+ Add");
        fireEvent.click(addButton);

        expect(addToCartMock).toHaveBeenCalledWith(expect.objectContaining({ name: "Test Product" }));
    });
});