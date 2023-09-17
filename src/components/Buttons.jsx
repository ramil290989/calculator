import React from 'react';
import icons from '../helpers/icons.js';

const Button = (props) => {
  const { buttonValue } = props;
  const regexp = {
    redaction: /^r.+t$|^b.+e$/i,
    operation: /nt$|on$|us$/,
    equal: /al/,
    digit: /\d|,/,
  };
  const buttonAttr = {
    className: '',
    content: () => regexp.digit.test(buttonValue)
      ? buttonValue
      : <img src={icons[buttonValue]} alt={buttonValue} />,
  };
  Object.keys(regexp).map((type) => {
    buttonAttr.className = regexp[type].test(buttonValue)
      ? `${type}-btn`
      : buttonAttr.className;
  });
  return (
    <button className={buttonAttr.className} data-value={buttonValue}>{buttonAttr.content()}</button>
  );
};

const Buttons = () => {
  const buttonsText = {
    line1: ['reset', 'backspace', 'percent', 'division'],
    line2: ['7', '8', '9', 'multiplication'],
    line3: ['4', '5', '6', 'minus'],
    line4: ['1', '2', '3', 'plus'],
    line5: [',', '0', 'plusMinus', 'equal'],
  };
  return (
    <div className="buttons-grid">
      {Object.keys(buttonsText).map((line) => (
        buttonsText[line].map((buttonValue, index) => (
          <Button buttonValue={buttonValue} key={index} />          
        ))
      ))}
    </div>
  );
};

export default Buttons;