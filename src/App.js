import React, {useState} from 'react';

import './App.css';

function App() {

  const codestate ={    
    num: '',
    mensaje:'',
    
  }  
  const urlSecret = "http://localhost:3000/setsecret/"
  const urlGuess = "http://localhost:3000/guess/"

  const[state, setState]= useState(codestate)
  
  
 const setSecret = async () => {
   
    const res = await fetch(urlSecret + state.num);
    const data = await res.json();
    setState({mensaje:data.message})    
}

const guess = async () => {
  
  const res = await fetch(urlGuess + state.num);
  const data = await res.json();
  setState({mensaje:data.result})
  
}
const handleNumber=(e)=>{
  setState({num:e.target.value})  
}

  return (
    <div className="App">
      CodeBreaker 
      <div>           
      <input id="number-secret" type="text" onChange={handleNumber}/>
      <button id="btn-secret" onClick={setSecret}>Set Secret</button>      
      </div>      
      <div>      
      <input id = "number-guess" type="text"onChange={handleNumber}/>
      <button id="btn-guess" onClick={guess}>Guess Secret</button>
      <div>{state.mensaje}</div>
      </div>    
    </div>
  );
}

export default App;
