import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

export const primaryColor = 'MediumVioletRed';
export const secondaryColor = 'MidnightBlue';

function App() {
  const [color, setColor] = useState(primaryColor);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setColor(color === primaryColor ? secondaryColor : primaryColor);
  };

  return (
    <div className='App'>
      <button
        style={{ backgroundColor: disabled ? 'gray' : color }}
        onClick={handleClick}
        disabled={disabled}
      >
        {`Change to ${replaceCamelWithSpaces(color)}`}
      </button>
      <input
        id='disable-button-checkbox'
        type='checkbox'
        checked={disabled}
        onChange={() => setDisabled(!disabled)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
