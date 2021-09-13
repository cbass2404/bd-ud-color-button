import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

let colorButton;
let checkBox;

beforeEach(() => {
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  colorButton = screen.getByRole('button', { name: /Change to blue/i });
  checkBox = screen.getByRole('checkbox');
});

describe(`App component has button and functions as follows`, () => {
  it('has the correct initial color', () => {
    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  });

  it('turns blue when clicked', () => {
    // click button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  });

  it('has the correct initial text', () => {
    fireEvent.click(colorButton);

    expect(colorButton.textContent).toBe('Change to red');
  });

  it(`starts out enabled`, () => {
    expect(colorButton).toBeEnabled();
  });

  it(`has a checkbox that starts unchecked`, () => {
    expect(checkBox).not.toBeChecked();
  });

  it(`is disabled if checkbox is clicked`, () => {
    fireEvent.click(checkBox);

    expect(colorButton).toBeDisabled();
  });

  it('has a checkbox that is checked when clicked', () => {
    fireEvent.click(checkBox);

    expect(checkBox).toBeChecked();
  });
});
