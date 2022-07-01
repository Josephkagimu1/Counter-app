import {React, useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState('0');

  function increaseCount(){
    setCounter(count => count + 1);
  }

  function decreaseCount(){
    if(counter < 1) {
      setCounter(0);
      alert('No more reduction ! ');

    } else {
      setCounter(count => count - 1);
    }

  }


  function ResetCount(){
    setCounter(0);
  }

  return (
    <div className="App">
      <h1>React Counter</h1>
      <button onClick={increaseCount} > + </button>
      <button onClick={decreaseCount}> - </button>
      <span> {counter} </span>
      &nbsp;  &nbsp;
      <button onClick={ResetCount}> Reset </button>

    </div>
  );
}

export default App;
