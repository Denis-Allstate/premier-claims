import { render, screen } from "@testing-library/react";
import SearchClaim from "./SearchClaim";
import { BrowserRouter } from 'react-router-dom';


test("Check that the search box initially has no classes applied to it", () => {

    render (
    <BrowserRouter>
    <SearchClaim />
    </BrowserRouter>);
    const input = screen.getByLabelText("Order Id");
    expect(input).not.toHaveClass("searchBoxError");
});