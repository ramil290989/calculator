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
  
  const setData = (e, value) => {
    const type = e.target.dataset.type;
  
    const calculate = () => {
      let a = '';
      if (result) {
        a = parseFloat(result);
        setNumA(result);
      } else {
        a = parseFloat(numA);
      }
      let b = numB.includes('%') ? (a * 0.01 * parseFloat(numB.slice(0, -1))) : parseFloat(numB);
      switch (operation) {
        case '/':
          setResult(String(a / b));
          break;
        case '*':
          setResult(String(a * b));
          break;
        case '-':
          setResult(String(a - b));
          break;
        case '+':
          setResult(String(a + b));
          break;
      }
    };

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
      if (result.length) {
        setNumA(result);
        setNumB('');
      }
      switch (value) {
        case 'division':
          setOperation('/');
          break;
        case 'multiplication':
          setOperation('*');
          break;
        case 'minus':
          setOperation('-');
          break;
        case 'plus':
          setOperation('+');
          break;
        case 'plusMinus':
          operation
            ? setNumB(() => (
                numB[0] === '-' ? numB.slice(1) : `-${numB}`
              ))
            : setNumA(() => (
                numA[0] === '-' ? numA.slice(1) : `-${numA}`
              ));
          break;
        case 'percent':
          numB && setNumB(`${numB}%`);
          break;
      }
    };

    const redaction = () => {
      switch (value) {
        case 'reset':
          setNumA('');
          setNumB('');
          setOperation('');
          setResult('');
          break;
        case 'backspace':
          setResult('');
          if (numB.length) {
            setNumB(numB.slice(0, -1));
          } else if (operation.length) {
            setOperation('');
          } else if (numA.length) {
            setNumA(numA.slice(0, -1));
          }
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
      case 'redaction-btn':
        redaction();
        break;
    }
  }

  const regexp = {
    redaction: /^r.+t$|^b.+e$/i,
    operation: /nt$|on$|us$/,
    equal: /al/,
    digit: /\d|\./,
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
    line5: ['.', '0', 'plusMinus', 'equal'],
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