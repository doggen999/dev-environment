/**
 * @jest-environment jsdom
 */
import { cleanup, fireEvent, render } from '@testing-library/react';
import CheckboxWithLabel from './CheckboxWithLabel';

/* 
    Note: running cleanup aterEach is done automatically for you in @testing-library/react@9.0.0 or higher
    unmount and cleanup DOM after the test is finished.
 */
afterEach(cleanup);

it('CheckboxWithLabel changes the text after each click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
