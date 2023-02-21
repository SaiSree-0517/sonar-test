/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from '@testing-library/react';
import Icon from '.';
describe('Icon', () => {
    test('renders without crashing', () => {
      render(<Icon path="assets/images/search.svg" />);
    });
  
    test('renders the correct image path', () => {
      const { getByTestId } = render(<Icon path="assets/images/search.svg" />);
      expect(getByTestId('image')).toHaveAttribute('xlink:href', 'assets/images/search.svg');
    });
  
    test('renders the correct height', () => {
      const { getByTestId } = render(<Icon path="assets/images/search.svg" height="50" />);
      expect(getByTestId('image')).toHaveAttribute('height', '50');
    });
  
    test('renders the correct width', () => {
      const { getByTestId } = render(<Icon path="assets/images/search.svg" width="100" />);
      expect(getByTestId('image')).toHaveAttribute('width', '100');
    });
  
    test('renders the correct stroke width', () => {
      const { getByTestId } = render(<Icon path="assets/images/search.svg" strokeWidth={2} />);
      expect(getByTestId('image')).toHaveAttribute('stroke-width', '2');
    });
    test("onclick event", () => {
      // render the component on virtual dom
      render(<Icon path="assets/images/search.svg" />);
      
      //select the elemaents you want to interact with
      const icon = screen.getByTestId("image");
      
      //interact with those elements
      fireEvent.click(icon);
      });
  });