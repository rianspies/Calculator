import { useState } from 'react'
import './App.css'

function App() {
  //a=first #, b=second #, c=count, d=operator, g=input box, h=equation
 const [a, setA] = useState('');
 const [b, setB] = useState('');
 const [c, setC] = useState(0);
 const [d, setD] = useState('');
 const [g, setG] = useState('');
 const [h, setH] = useState('');
 const [disable, setDisable] = useState(false);

 
 const handleClick = (e) =>{
  let input = e.target.value;
  
  if(c == 0){
    let result = a + input ;
    setA(result);
    setG(result);
    setH(result);
  } else if(c == 1){
    let result = b + input;
    setB(result);
    setG(result);
    setH(prev=> prev + input)
  }
 };

 const handleOperator = (e) =>{
  setD(e.target.value);
  setC(1);
  setG('');
  setH(prev=> prev + e.target.value);
 };

 const handleEquation = () =>{
  const first = Number(a);
  const second = Number(b);
  let r=0
  if(d == '+'){
    r=first + second;
    setG(r)
  } else if(d == '-'){
    r=first - second;
    setG(r)
  } else if(d == '/'){
    r=first/second;
    setG(r)
  } else if(d == 'x'){
    r=first*second;
    setG(r)
  };
  setDisable(true)
 };

 const clear = () =>{
  setA('');
  setB('');
  setC(0);
  setD('');
  setG('');
  setH('');
  setDisable(false)
 }
 

  return ( 
    <>
    
    <div id='mainC'>
      <p id='equation'>{h}</p>
      <input type="text" id='result' value={g} readOnly/>
      <div>
        <button id='seven' value={7} onClick={handleClick} disabled={disable}>7</button>
        <button id='eight' value={8} onClick={handleClick} disabled={disable}>8</button>
        <button id='nine' value={9} onClick={handleClick} disabled={disable}>9</button>
        <button id='plus' value={'+'} onClick={handleOperator} disabled={disable}>+</button>
      </div>
      <div>
        <button id='four' value={4} onClick={handleClick} disabled={disable}>4</button>
        <button id='five' value={5} onClick={handleClick} disabled={disable}>5</button>
        <button id='six' value={6} onClick={handleClick} disabled={disable}>6</button>
        <button id='minus' value={'-'} onClick={handleOperator} disabled={disable}>-</button>
      </div>
      <div>
        <button id='one' value={1} onClick={handleClick} disabled={disable}>1</button>
        <button id='two' value={2} onClick={handleClick} disabled={disable}>2</button>
        <button id='three' value={3} onClick={handleClick} disabled={disable}>3</button>
        <button id='multiply' value={'x'} onClick={handleOperator} disabled={disable}>x</button>
        
      </div>
        <button id='clear' onClick={clear}>C</button>
        <button id='zero' value={0} onClick={handleClick} disabled={disable}>0</button>
        <button id='equals' onClick={handleEquation} disabled={disable}>=</button>
        <button id='devide' value={'/'} onClick={handleOperator} disabled={disable}>÷</button>
    </div>
    </>
  )
}

export default App
