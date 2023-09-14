import './App.css';
import Display from './components/Display.jsx';
import ResultDisplay from './components/ResultDisplay.jsx';
import Buttons from './components/Buttons.jsx';

function App() {
  return (
    <div className="container">
      <Display />
      <ResultDisplay />
      <Buttons />
    </div>
  );
};

export default App;
