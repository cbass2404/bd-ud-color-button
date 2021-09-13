import { render, screen, fireEvent } from '@testing-library/react';
import App, {
  replaceCamelWithSpaces,
  primaryColor,
  secondaryColor,
} from './App';

let colorButton;
let checkBox;

const formattedPrimaryColorName = replaceCamelWithSpaces(primaryColor);
const formattedSecondaryColorName = replaceCamelWithSpaces(secondaryColor);
const primaryButtonText = `Change to ${formattedPrimaryColorName}`;
const secondaryButtonText = `Change to ${formattedSecondaryColorName}`;

beforeEach(() => {
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  colorButton = screen.getByRole('button', {
    name: primaryButtonText,
  });
  checkBox = screen.getByRole('checkbox', { name: /Disable button/i });
});

describe(`App component has button with checkbox and functions as follows`, () => {
  it(`has the correct initial color of ${formattedPrimaryColorName}`, () => {
    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: primaryColor });
  });

  it('has the correct initial text', () => {
    expect(colorButton).toHaveTextContent(primaryButtonText);
  });

  it(`starts out enabled`, () => {
    expect(colorButton).toBeDisabled();
  });

  it(`has a checkbox that starts unchecked`, () => {
    expect(checkBox).not.toBeChecked();
  });

  it(`turns ${formattedSecondaryColorName} when clicked`, () => {
    // click button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: secondaryColor });
  });

  it('has the correct text when clicked', () => {
    fireEvent.click(colorButton);

    expect(colorButton).toHaveTextContent(secondaryButtonText);
  });

  it(`is disabled if checkbox is clicked`, () => {
    fireEvent.click(checkBox);

    expect(colorButton).toBeDisabled();
  });

  it('has a checkbox that is checked when clicked', () => {
    fireEvent.click(checkBox);

    expect(checkBox).toBeChecked();
  });

  it('changes to gray when disabled', () => {
    fireEvent.click(checkBox);

    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  });
});

describe('spaces before camel-case capital letters', () => {
  it('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  it('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  it('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
