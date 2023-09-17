import { useState } from 'react';
import './styles.scss';
import './components/Board';
import Board from './components/Board';
//import Square from './components/Square';

function App() {
  const [counter, setcounter] = useState(1);

  let onclickbtn = () => {
    console.log('click');
    setcounter(currentCounter => {
      return currentCounter + 1;
    });
  };
  return (
    <div className="app">
      <div>
        <button onClick={onclickbtn}>Click me Please please</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}
export default App;
