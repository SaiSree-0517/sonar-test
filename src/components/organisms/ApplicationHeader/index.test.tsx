import {render,screen,fireEvent} from "@testing-library/react"
import ApplicationHeader from "."
import React from "react"
test("dashboard renders correctly",()=>{
    render(<ApplicationHeader/>)
    fireEvent.click(screen.getByRole("button",{name:/sell/i}));
    fireEvent.click(screen.getByRole("button",{name:/buy/i}));
    fireEvent.click(screen.getByTestId("iconComponent"));
})