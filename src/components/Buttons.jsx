import React, { useContext } from 'react';
import icons from '../helpers/icons.js';
import NumAContext from '../context/NumA.jsx';
import NumBContext from '../context/NumB.jsx';
import OperationContext from '../context/Operation.jsx';
import ResultContext from '../context/Result.jsx';

const Button = (props) => {
  const { numA, setNumA } = useContext(NumAContext);
  const { numB, setNumB } = useContext(NumBContext);
  const { operation, setOperation } = useContext(OperationContext);
  const { result, setResult } = useContext(ResultContext);
  const { buttonValue } = props;

  const calculate = () => {
    switch (operation) {
      case '/':
        setResult(Number(numA) / Number(numB));
    }
  }
  
  const setData = (e, value) => {
    const type = e.target.dataset.type;
    const setNum = (num) => {
        switch (value) {
          case ',':
            if (num.includes(',')) {
              return num;
            }
            if (!num.length) {
              return '0,';
            }
            return `${num}${value}`;
          case '0':
            return num.length === 1 && num[0] === '0' ? '0' : `${num}${value}`;
          default:
            return `${num}${value}`;
        }
    };
    const setOperator = () => {
      !numA.length && setNumA('0');
      switch (value) {
        case 'division':
          setOperation('/');
          break;
      }
    };
    switch (type) {
      case 'operation-btn':
        setOperator();
        break;
      case 'digit-btn':
        operation ? setNumB(setNum(numB)) : setNumA(setNum(numA));
        break;
      case 'equal-btn':
        calculate();
        break;
    }
  }
  const regexp = {
    redaction: /^r.+t$|^b.+e$/i,
    operation: /nt$|on$|us$/,
    equal: /al/,
    digit: /\d|,/,
  };
  const buttonAttr = {
    dataType: '',
    content: () => regexp.digit.test(buttonValue)
      ? buttonValue
      : <img src={icons[buttonValue]} alt={buttonValue} />,
  };
  Object.keys(regexp).map((type) => {
    buttonAttr.dataType = regexp[type].test(buttonValue)
      ? `${type}-btn`
      : buttonAttr.dataType;
  });
  return (
    <button data-type={buttonAttr.dataType} onClick={(e) => setData(e, buttonValue)}>{buttonAttr.content()}</button>
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