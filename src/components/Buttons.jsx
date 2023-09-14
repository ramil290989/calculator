import React from 'react';

const ButtonsLine = ({ line }) => {
  return (
    <div className="buttons-line">
      {line.map((buttonText, index) => (
        <button key={index}>{buttonText}</button>
      ))}
    </div>
  );
};

const Buttons = () => {
  const buttonsText = {
    line1: ['c', 'backspace', '%', '/'],
    line2: ['7', '8', '9', '*'],
    line3: ['4', '5', '6', '-'],
    line4: ['1', '2', '3', '+'],
    line5: ['+/-', '0', ',', '='],
  };
  return (
    <div className="result-display">
      {Object.keys(buttonsText).map((line) => (
        <ButtonsLine line={buttonsText[line]} />
      ))}
    </div>
  );
};

export default Buttons;