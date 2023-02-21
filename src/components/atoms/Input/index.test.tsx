import { fireEvent, render,screen } from "@testing-library/react";
import Input from "./index";

test('renders correctly',()=>{
    render(<Input label="email" />)
    const textElement = screen.getByRole('textbox', { name: /email/i });
    expect(textElement).toBeInTheDocument()
}) 

test('onchange event check',()=>{
    render(<Input  />)
    const textElement = screen.getByRole('textbox', { name: /email/i });
    fireEvent.change(textElement);

}) 