import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import WatchList from '.'
describe('WatchList tests', () => {
  test('Whether Watchlist rendering or not', () => {
    render(<WatchList mainText={'Watchlist'} optionText={'discover'} partition={'assets/images/Partition.svg'} icon={'assets/images/chevron-left.svg'} editText={'edit'} />)
  })
})
it('contains a TypographyComponent with text "Discover assets"', () => {
  const { getByText } = render(<WatchList mainText={'Watchlist'} optionText={'Discover assets'} partition={'assets/images/Partition.svg'} icon={'assets/images/chevron-left.svg'} editText={'edit'}/>);
  expect(getByText('Discover assets')).toBeInTheDocument();
});
it('contains a "watchlist" data-testid attribute', () => {
  const { getByTestId } = render(<WatchList mainText={'Watchlist'} optionText={'discover'} partition={'assets/images/Partition.svg'} icon={'assets/images/chevron-left.svg'} editText={'edit'} />);
  expect(getByTestId('watchlist')).toBeInTheDocument();
});
it('contains a StyledBox component with data-testid="styled-box"', () => {
  const { getByTestId } = render(<WatchList mainText={'Watchlist'} optionText={'discover'} partition={'assets/images/Partition.svg'} icon={'assets/images/chevron-left.svg'} editText={'edit'} />);
  expect(getByTestId('styled-box')).toBeInTheDocument();
});