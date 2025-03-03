import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import CustomAlert from "../../components/CustomAlert";
import { vi } from "vitest";

vi.mock("../../components/CheckMark", () => ({
  default: () => "<div data-testid='checkmark-icon'></div>",
}));


vi.mock("../../components/CheckMark", () => ({
    default: () => <div data-testid="checkmark-icon" />,
}));


describe("CustomAlert Component",()=>{
    test("renders alert message correctly",()=>{
        const message = "Action Successfull";
        render(<CustomAlert message={message}/>)
        expect(screen.getByText(message)).toBeInTheDocument()
    })

    test("displays the Checkamrk component",()=>{
        render(<CustomAlert message="Test message"/>)
        expect(screen.getByTestId("checkmark-icon")).toBeInTheDocument()
    })

    test("hascorrect alert styling",()=>{
        render(<CustomAlert message="Styled Alert"/>)
        const alertElement = screen.getByText("Styled Alert").parentElement
        expect(alertElement).toHaveClass("custom-alert")
    })
})