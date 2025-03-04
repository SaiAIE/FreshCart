import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomAlert from "../../components/CustomAlert";
import React from "react";

jest.mock("../../components/CheckMark", () => () => <div data-testid="checkmark-icon" />);

describe("CustomAlert Component", () => {
  test("renders alert message correctly", () => {
    const message = "Action Successful";
    render(<CustomAlert message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test("displays the Checkmark component", () => {
    render(<CustomAlert message="Test message" />);
    expect(screen.getByTestId("checkmark-icon")).toBeInTheDocument();
  });

  test("has correct alert styling", () => {
    render(<CustomAlert message="Styled Alert" />);
    const alertElement = screen.getByText("Styled Alert").parentElement;
    expect(alertElement).toHaveClass("custom-alert");
  });
});
