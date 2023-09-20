import React, { useState } from 'react';
import NumAContext from './context/NumA.jsx';
import NumBContext from './context/NumB.jsx';
import OperationContext from './context/Operation.jsx';
import ResultContext from './context/Result.jsx';
import './App.css';
import Display from './components/Display.jsx';
import ResultDisplay from './components/ResultDisplay.jsx';
import Buttons from './components/Buttons.jsx';

function App() {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  return (
    <div className="container">
      <div className="calculator">
        <NumAContext.Provider value={{ numA, setNumA }}>
          <NumBContext.Provider value={{ numB, setNumB }}>
            <OperationContext.Provider value={{ operation, setOperation }}>
              <ResultContext.Provider value={{ result, setResult }}>
                <Display />
                <ResultDisplay />
                <Buttons />
              </ResultContext.Provider>
            </OperationContext.Provider>
          </NumBContext.Provider>
        </NumAContext.Provider>
      </div>
    </div>
  );
};

export default App;
