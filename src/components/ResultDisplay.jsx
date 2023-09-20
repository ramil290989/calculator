import React, { useContext } from 'react';
import ResultContext from '../context/Result';

const ResultDisplay = () => {
  const { result, setResult } = useContext(ResultContext);
  return (
    <div className="display-result">
      <h3>{result}</h3>
    </div>
  );
};

export default ResultDisplay;