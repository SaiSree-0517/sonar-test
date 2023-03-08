import { render,screen,fireEvent } from "@testing-library/react";
import NavigationBar from ".";
import React from 'react'
import '@testing-library/jest-dom'


test("navigation bar render check",()=>{
    render(<NavigationBar />)
    const images=screen.getAllByRole("img")
    expect(images.length).toBeGreaterThanOrEqual(1)

})

test("fire event check for dashboard",()=>{
    render(<NavigationBar />)
    const button = screen.getByRole('button', {
        name: /dash board/i
      });
      fireEvent.click(button);
})

test("fire event check for myportfolio",()=>{
    render(<NavigationBar />)
    const button = screen.getByRole('button', {
        name: /my portfolia/i
      });
      fireEvent.click(button);
})

test("fire event check for trade",()=>{
    render(<NavigationBar />)
    const button = screen.getByRole('button', {
        name: /trade/i
      });
      fireEvent.click(button);
})
test("fire event check for notification",()=>{
    render(<NavigationBar />)
    const button = screen.getByRole('button', {
        name: /notifications/i
      });
      fireEvent.click(button);
})
test("fire event check for logout",()=>{
    render(<NavigationBar />)
    const button = screen.getByRole('button', {
        name: /log\-out/i
      });
      fireEvent.click(button);
})


