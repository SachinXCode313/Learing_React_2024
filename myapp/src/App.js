import {useState} from 'react' 
import logo from './logo.svg';
import './App.css';

function App() {

  let [counter,setCounter] = useState(0);
  
  const addValue = () => {
    
    setCounter(counter+1);
  }

  const deleteValue = () =>{
    if(counter<0){
      counter=0;
      
    }
    setCounter(counter-1);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coffee With SG :)</h1>
        <h3>Counter : {counter}</h3>
        <button onClick={addValue}>Add Value</button>
        <button onClick={deleteValue}>Remove Value</button>
      </header>
    </div>
  );
}

export default App;
