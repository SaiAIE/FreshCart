import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, it, expect, vi } from "vitest"; // ✅ Use Vitest functions
import "@testing-library/jest-dom"; 
import Cart from "../../components/Cart";
import { useCart } from "../../contexts/CartContext";

vi.mock("../../contexts/CartContext"); // ✅ Use Vitest mock

describe("Cart Component", () => {
    let mockCart, mockRemoveFromCart, mockIncrementQuantity, mockDecrementQuantity, mockOnClose;

    beforeEach(() => {
        mockCart = [
            {
                _id: "67b6d752369dc98f2b9ee0d0",
                name: "Haldiram's Sev Bhujia",
                image: ["https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg"],
                price: 21.6,
                originalPrice: 24,
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

        // ✅ Use Vitest `vi.fn()`
        mockRemoveFromCart = vi.fn();
        mockIncrementQuantity = vi.fn();
        mockDecrementQuantity = vi.fn();
        mockOnClose = vi.fn();

        // ✅ Mock useCart hook with Vitest
        useCart.mockReturnValue({
            cart: mockCart,
            removeFromCart: mockRemoveFromCart,
            incrementQuantity: mockIncrementQuantity,
            decrementQuantity: mockDecrementQuantity,
        });
    });

    it("renders empty cart message when cart is empty", () => {
        useCart.mockReturnValue({ cart: [], removeFromCart: vi.fn(), incrementQuantity: vi.fn(), decrementQuantity: vi.fn() });

        render(<Cart isOpen={true} onClose={mockOnClose} />);

        expect(screen.getByText("Oops!")).toBeInTheDocument();
        expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
        expect(screen.getByText("Shop Now")).toBeInTheDocument();
    });

    it("displays cart items when cart is not empty", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        expect(screen.getByText("Haldiram's Sev Bhujia")).toBeInTheDocument();
        expect(screen.getByText(/\$\s?43.20/i)).toBeInTheDocument();
        expect(screen.getByText("250gm")).toBeInTheDocument();
    });

    it("calls removeFromCart when Remove button is clicked", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        const removeButton = screen.getByText(/Remove/i);
        fireEvent.click(removeButton);

        expect(mockRemoveFromCart).toHaveBeenCalledWith("67b6d752369dc98f2b9ee0d0");
    });

    it("calls incrementQuantity when + button is clicked", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        const plusButton = screen.getByDisplayValue("+");
        fireEvent.click(plusButton);

        expect(mockIncrementQuantity).toHaveBeenCalledWith("67b6d752369dc98f2b9ee0d0");
    });

    it("calls decrementQuantity when - button is clicked", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        const minusButton = screen.getByDisplayValue("-");
        fireEvent.click(minusButton);

        expect(mockDecrementQuantity).toHaveBeenCalledWith("67b6d752369dc98f2b9ee0d0");
    });

    it("calls onClose when Close button is clicked", () => {
        render(<Cart isOpen={true} onClose={mockOnClose} />);

        const closeButton = screen.getByTestId("close-btn");
        fireEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalled();
    });
});
