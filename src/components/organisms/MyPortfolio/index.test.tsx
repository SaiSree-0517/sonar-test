import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import MyPortfolio from '.'
describe('MyPortfolio tests', () => {
  test('Whether my portfolio rendering or not', () => {
    render(<MyPortfolio mainHead={'My portfolio'} imageOne={'assets/images/chart.svg'} imageTwo={'assets/images/list-1.svg'} />)
  })
})
it('contains a My portfolio text', () => {
  const { getByText } = render(<MyPortfolio mainHead={'My portfolio'} imageOne={'assets/images/chart.svg'} imageTwo={'assets/images/list-1.svg'} />);
  expect(getByText('My portfolio')).toBeInTheDocument();
});
