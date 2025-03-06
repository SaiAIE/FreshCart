import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import Footer from "../../components/Footer";
import { getFooter } from "../../api/api.service";
import "@testing-library/jest-dom";

jest.mock("../../api/api.service", () => ({
  getFooter: jest.fn()
}));

describe("Footer Component", () => {
  test("renders loading state initially", async () => {
    getFooter.mockImplementation(() => new Promise(() => {}));
    await act(async () => {
      render(<Footer />);
    });
    expect(document.querySelector(".loader")).toBeInTheDocument();
  });

  test("renders footer data correctly when API succeeds", async () => {
    const mockData = [
      { heading: "Company", items: ["About Us", "Careers", "Blog"] },
      { heading: "Support", items: ["Contact", "FAQs", "Help Center"] }
    ];

    getFooter.mockResolvedValue({ data: mockData });
    await act(async () => {
      render(<Footer />);
    });

    await waitFor(() => {
      expect(screen.getByText("Company", { exact: false })).toBeInTheDocument();
      expect(screen.getByText("Support", { exact: false })).toBeInTheDocument();
      expect(screen.getByText("About Us", { exact: false })).toBeInTheDocument();
      expect(screen.getByText("Contact", { exact: false })).toBeInTheDocument();
    });
  });

  test("renders error message on API failure", async () => {
    getFooter.mockRejectedValue(new Error("Failed to fetch"));
    await act(async () => {
      render(<Footer />);
    });

    await waitFor(() => expect(screen.getByText((content) => content.includes("Failed to load footer content"))).toBeInTheDocument());
  });
});