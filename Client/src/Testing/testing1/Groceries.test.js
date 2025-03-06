import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Groceries from "../../components/Groceries";
import { getGroceries } from "../../api/api.service";
import "@testing-library/jest-dom";

jest.mock("../../api/api.service", () => ({
  getGroceries: jest.fn(),
}));

describe("Groceries Component", () => {
  test("displays groceries when API call is successful", async () => {
    const mockData = [
      {
        img: "https://example.com/image1.jpg",
        title: "Fresh Apples",
        offer: "20% Off",
      },
      {
        img: "https://example.com/image2.jpg",
        title: "Organic Bananas",
        offer: "Buy 1 Get 1",
      },
    ];

    getGroceries.mockResolvedValueOnce({ data: mockData });

    render(<Groceries />);

    await waitFor(() => {
      expect(screen.getByText(/Fresh Apples/i)).toBeInTheDocument();
      expect(screen.getByText(/Organic Bananas/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/20% Off/i)).toBeInTheDocument();
    expect(screen.getByText(/Buy 1 Get 1/i)).toBeInTheDocument();

    expect(screen.getAllByText(/Shop Now/i)).toHaveLength(2);
  });

  test("displays no groceries message when API returns empty", async () => {
    getGroceries.mockResolvedValueOnce({ data: [] });

    render(<Groceries />);

    await waitFor(() => {
      expect(screen.queryByText(/Shop Now/i)).not.toBeInTheDocument();
    });
  });

  test("handles API failure gracefully", async () => {
    getGroceries.mockRejectedValueOnce(new Error("API Error"));

    render(<Groceries />);

    await waitFor(() => {
      expect(screen.queryByText(/Shop Now/i)).not.toBeInTheDocument();
    });

  });
});
