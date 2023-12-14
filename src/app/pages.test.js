import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "./page";

describe('page', () => {
    it("should be visible", () => {
        const { container } = render(<Home />);
        const main = container.querySelector('main');
        expect(main).toBeInTheDocument();
    })
});