import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
const axios= require("axios");

global.importMeta = { env: { VITE_BACKEND: "http://localhost:5000" } };

import DailyBestSells from "../../components/DailySells";

jest.mock("axios");

describe("DailyBestSells Component", () => {
    const mockData = [
        {
            _id: "67b60decfe18e000e3f17828",
            img: "https://freshcart-next-js.vercel.app/images/products/product-img-11.jpg",
            title: "Roast Ground Coffee",
            category: "Tea, Coffee & Drinks",
            price: "$13.5",
            originalPrice: "$18",
            rating: 4.5,
            buttonText: "+ Add To Cart",
            timer: { days: 1334, hours: 23, mins: 3, secs: 20 },
        }
    ];

    test("renders skeleton loaders while loading", async () => {
        axios.get.mockResolvedValueOnce({ data: [] });

        render(<DailyBestSells />);
        
        expect(screen.getAllByClass("daily-best-sells__item-skeleton")).toHaveLength(4);
    });

    test("displays fetched products correctly", async () => {
        axios.get.mockResolvedValueOnce({ data: mockData });

        render(<DailyBestSells />);

        await waitFor(() => expect(screen.getByText("Roast Ground Coffee")).toBeInTheDocument());
        expect(screen.getByText("Tea, Coffee & Drinks")).toBeInTheDocument();
        expect(screen.getByText("$13.5")).toBeInTheDocument();
        expect(screen.getByText("+ Add To Cart")).toBeInTheDocument();
    });

    test("displays 'No Products Available' when API returns empty data", async () => {
        axios.get.mockResolvedValueOnce({ data: [] });

        render(<DailyBestSells />);

        await waitFor(() => expect(screen.getByText("No Products Available")).toBeInTheDocument());
    });

    test("handles API errors correctly", async () => {
        axios.get.mockRejectedValueOnce(new Error("API Error"));

        render(<DailyBestSells />);

        await waitFor(() => expect(screen.getByText("No Products Available")).toBeInTheDocument());
    });
});
