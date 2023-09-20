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
      <h2>{numA}</h2>
      <h2>{operation}</h2>
      <h2>{numB}</h2>
    </div>
  );
};

export default Display;
