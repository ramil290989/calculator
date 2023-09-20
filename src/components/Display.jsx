import React, { useContext } from 'react';
import NumAContext from '../context/NumA.jsx';
import NumBContext from '../context/NumB.jsx';
import OperationContext from '../context/Operation.jsx';

const Display = () => {
  const { numA, setNumA } = useContext(NumAContext);
  const { numB, setNumB } = useContext(NumBContext);
  const { operation, setOperation } = useContext(OperationContext);
  return (
    <div className="display">
      <div>{numA} {operation} {numB}</div>
    </div>
  );
};

export default Display;
