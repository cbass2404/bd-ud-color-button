import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    const newColor = color === 'red' ? 'blue' : 'red';
    setColor(newColor);
  };

  return (
    <div className='App'>
      <button
        style={{ backgroundColor: disabled ? 'gray' : color }}
        onClick={handleClick}
        disabled={disabled}
      >
        {color === 'red' ? 'Change to blue' : 'Change to red'}
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
