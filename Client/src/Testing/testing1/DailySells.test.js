import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import DailyBestSells from "../../components/DailySells";
import { getDailySells } from "../../api/api.service";
import "@testing-library/jest-dom";

jest.mock("../../api/api.service", () => ({
  getDailySells: jest.fn(),
}));

describe("DailyBestSells Component", () => {
  test("shows loading skeleton while fetching data", async () => {
    getDailySells.mockResolvedValueOnce({ data: [] });

    render(<DailyBestSells />);
    
    expect(screen.getAllByTestId("loading-skeleton").length).toBeGreaterThan(0);

    await waitFor(() => expect(screen.queryByTestId("loading-skeleton")).not.toBeInTheDocument());
  });

  test("displays daily sells products when API call is successful", async () => {
    const mockData = [
      {
        _id: "67b60decfe18e000e3f17827",
        buttonText: "Shop Now",
        description: "Get the best deal before close",
        img: "https://freshcart-next-js.vercel.app/images/banner/banner-deal.jpg",
        title: "100% Organic Coffee Beans.",
      },
      {
        _id: "67c9462f0fce17f7e082bfd1",
        buttonText: "+ Add To Cart",
        category: "Tea, Coffee & Drinks",
        img: "https://freshcart-next-js.vercel.app/images/products/product-img-11.jpg",
        originalPrice: "$18",
        price: "$13.5",
        rating: 4.5,
        timer: { days: 1334, hours: 23, mins: 3, secs: 20 },
        title: "Roast Ground Coffee",
      },
    ];

    getDailySells.mockResolvedValueOnce({ data: mockData });

    render(<DailyBestSells />);

    await waitFor(() => {
      expect(screen.getByText(/Daily Best Sells/i)).toBeInTheDocument();
    });

    screen.debug();

    await waitFor(() => {
        expect(
          screen.getByText((content) => content.includes("100% Organic Coffee Beans"))
        ).toBeInTheDocument();
      });      

    expect(screen.getByText(/Roast Ground Coffee/i)).toBeInTheDocument();

    expect(screen.getByText(/Shop Now/i)).toBeInTheDocument();
    expect(screen.getByText(/\+ Add To Cart/i)).toBeInTheDocument();

    expect(screen.getByText(/\$13.5/i)).toBeInTheDocument();
  });

  test("displays error message when API call fails", async () => {
    getDailySells.mockRejectedValueOnce(new Error("API Error"));

    render(<DailyBestSells />);

    await waitFor(() => expect(screen.getByText(/No Products Available/i)).toBeInTheDocument());
  });

  test("shows 'No Products Available' when API returns empty data", async () => {
    getDailySells.mockResolvedValueOnce({ data: [] });

    render(<DailyBestSells />);

    await waitFor(() => expect(screen.getByText(/No Products Available/i)).toBeInTheDocument());
  });
});
