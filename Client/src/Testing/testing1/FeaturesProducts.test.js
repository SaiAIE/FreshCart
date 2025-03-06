import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import FeaturesProducts from "../../components/FeaturesProducts";
import { getCategories } from "../../api/api.service";
import "@testing-library/jest-dom";

jest.mock("../../api/api.service", () => ({
  getCategories: jest.fn()
}));

describe("FeaturesProducts Component", () => {
  test("renders loading skeletons initially", async () => {
    getCategories.mockImplementation(() => new Promise(() => {})); // Ensures loading state persists
    await act(async () => {
      render(<FeaturesProducts />);
    });
    expect(screen.queryAllByTestId("features-products-loading")).not.toHaveLength(0);
  });

  test("displays error message on API failure", async () => {
    getCategories.mockRejectedValue(new Error("Failed to fetch"));
    await act(async () => {
      render(<FeaturesProducts />);
    });

    await waitFor(() => expect(screen.getByText("Failed to load categories. Please try again later.")).toBeInTheDocument());
  });

  test("renders categories data correctly when API succeeds", async () => {
    const mockData = [
      { img: "https://via.placeholder.com/150", title: "Category 1" },
      { img: "https://via.placeholder.com/150", title: "Category 2" }
    ];

    getCategories.mockResolvedValue({ data: mockData });
    await act(async () => {
      render(<FeaturesProducts />);
    });

    await waitFor(() => {
      expect(screen.getByText("Category 1")).toBeInTheDocument();
      expect(screen.getByText("Category 2")).toBeInTheDocument();
    });
  });
});
