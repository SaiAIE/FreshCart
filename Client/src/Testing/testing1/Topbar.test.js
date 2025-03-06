import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Topbar from "../../components/Topbar";
import "@testing-library/jest-dom";


jest.mock("../../assets/uk.png", () => "uk.png");
jest.mock("../../assets/germany.png", () => "germany.png");

describe("Topbar Component", () => {
  test("renders the topbar with default 'English' option", () => {
    render(<Topbar />);

    
    const dropdownHeading = screen.getByText(/English/i, { selector: "div" });
    expect(dropdownHeading).toBeInTheDocument();

    
    expect(screen.getByText(/Deustch/i)).toBeInTheDocument();
  });

  test("shows dropdown options when hovered", () => {
    render(<Topbar />);

    
    const dropdownHeading = screen.getByText(/English/i, { selector: "div" });

    
    fireEvent.mouseOver(dropdownHeading);

    
    expect(screen.getByText(/Deustch/i)).toBeInTheDocument();
  });
});
