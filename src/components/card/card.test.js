/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import Card from './card';

it('A card should display "X" if not displayed', () => {
  const { getByText } = render(<Card />);

  expect(getByText('X')).toBeTruthy();
});

it('A card should display color value if displayed', () => {
  const colorValue = 'red';
  const { getByText } = render(<Card color={colorValue} display={true} />);
  expect(getByText(colorValue)).toBeTruthy();
});
