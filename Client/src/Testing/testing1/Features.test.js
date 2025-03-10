import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import Features from "../../components/Features";
import { getFeatures } from "../../api/api.service";
import "@testing-library/jest-dom";

jest.mock("../../api/api.service", () => ({
  getFeatures: jest.fn()
}));

describe("Features Component", () => {
  test("renders loading skeletons initially",async () => {
    await act(async ()=>{
    render(<Features />);
    })
    expect(screen.getByTestId("features-loading")).toBeInTheDocument();
  });

  test("displays error message on API failure", async () => {
    getFeatures.mockRejectedValue(new Error("Failed to fetch"));
    await act(async () => {
        render(<Features />);
    });

    await waitFor(() => expect(screen.getByText("Error Fetching Data")).toBeInTheDocument());
  });

  test("renders features data correctly when API succeeds", async () => {
    const mockData = [
      { icon: "fa-truck", title: "Fast Delivery", description: "Get your orders in no time!" },
      { icon: "fa-lock", title: "Secure Payment", description: "Your transactions are safe with us." }
    ];

    getFeatures.mockResolvedValue({ data: mockData });
    await act(async () => {
      render(<Features />);
    });

    await waitFor(() => {
      expect(screen.getByText("Fast Delivery")).toBeInTheDocument();
      expect(screen.getByText("Secure Payment")).toBeInTheDocument();
    });
  });
});