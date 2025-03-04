import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensure Jest DOM matchers are available
import Cart from "../../components/Cart";
import { useCart } from "../../contexts/CartContext";
import React from "react";

jest.mock("../../contexts/CartContext"); // ✅ Mock useCart hook

describe("Cart Component", () => {
    let mockCart, mockRemoveFromCart, mockIncrementQuantity, mockDecrementQuantity, mockOnClose;

    beforeEach(() => {
        mockCart = [
            {
                _id: "67b6d752369dc98f2b9ee0d0",
                name: "Haldiram's Sev Bhujia",
                image: ["https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg"],
                price: 21.6,
                originalPrice: "$24.00", // ✅ Ensure format matches UI
                rating: "★★★★★",
                offer: "Sale",
                offerValue: "10%",
                quantity: 2,
                details: {
                    availability: "In Stock",
                    quantity: ["250gm", "500gm", "1kg"],
                },
                reviews: [
                    { _id: "67c5451b429ed2a275a80a8c", reviewer: "Shankar Subaraman", date: "2022-12-29T18:30:00.000Z" },
                    { _id: "67c5451b429ed2a275a80a8d", reviewer: "Robert Thomas", date: "2022-12-28T18:30:00.000Z" }
                ]
            }
        ];

        // ✅ Use Jest `jest.fn()`
        mockRemoveFromCart = jest.fn();
        mockIncrementQuantity = jest.fn();
        mockDecrementQuantity = jest.fn();
        mockOnClose = jest.fn();

        // ✅ Mock useCart hook
        useCart.mockReturnValue({
            cart: mockCart,
            removeFromCart: mockRemoveFromCart,
            incrementQuantity: mockIncrementQuantity,
            decrementQuantity: mockDecrementQuantity,
        });
    });

    test("renders empty cart message when cart is empty", () => {
        useCart.mockReturnValue({ cart: [], removeFromCart: jest.fn(), incrementQuantity: jest.fn(), decrementQuantity: jest.fn() });

        render(<Cart isOpen={true} onClose={mockOnClose} />);

        expect(screen.getByText("Oops!")).toBeInTheDocument();
        expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
        expect(screen.getByText("Shop Now")).toBeInTheDocument();
    });

    test("displays cart items when cart is not empty", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        // Debugging Step: Uncomment if needed
        // screen.debug();

        expect(screen.getByText("Haldiram's Sev Bhujia")).toBeInTheDocument();
        
        expect(screen.getByText("250gm")).toBeInTheDocument();
    });

    test("calls removeFromCart when Remove button is clicked", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        const removeButton = screen.getByText(/Remove/i);
        fireEvent.click(removeButton);

        expect(mockRemoveFromCart).toHaveBeenCalledWith("67b6d752369dc98f2b9ee0d0");
    });

    test("calls incrementQuantity when + button is clicked", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        const plusButton = screen.getByText("+");
        fireEvent.click(plusButton);

        expect(mockIncrementQuantity).toHaveBeenCalledWith("67b6d752369dc98f2b9ee0d0");
    });

    test("calls decrementQuantity when - button is clicked", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        const minusButton = screen.getByText("-");
        fireEvent.click(minusButton);

        expect(mockDecrementQuantity).toHaveBeenCalledWith("67b6d752369dc98f2b9ee0d0");
    });

    test("calls onClose when Close button is clicked", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        const closeButton = screen.getByTestId("close-btn");
        fireEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalled();
    });
});
