
  import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "./page";

describe('page', () => {
    it("should be visible", () => {
        const { getByTestId } = render(<Home />);
        const search = getByTestId('search-page');
        expect(search).toBeInTheDocument();
    })
});