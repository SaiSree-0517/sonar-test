import DashboardPage from '.'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))
const renderDashboard = () => {
  render(
      <DashboardPage leftText={'My portfolio value'} rightText={'My Wallets'} amount={'$2500'}/>
  )
}
describe('Pages/DashboardPage', () => {
  test('Renders watchlist cards correctly', async () => {
    
    renderDashboard()
    const watchlist = screen.getByTestId('watchlist')
    expect(watchlist).toBeInTheDocument()
  })
})
describe('DashboardPage', () => {
  it('renders My portfolio value text', () => {
    render(<DashboardPage leftText={'My portfolio value'} rightText={'My Wallets'} amount={'$2500'} />)
    const portfolioValueText = screen.getByText('My portfolio value')
    expect(portfolioValueText).toBeInTheDocument()
  })

  it('renders My wallets text', () => {
    render(<DashboardPage leftText={'My portfolio value'} rightText={'My wallets'} amount={'$2500'}/>)
    const myWalletsText = screen.getByText('My wallets')
    expect(myWalletsText).toBeInTheDocument()
  })
})