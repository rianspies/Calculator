import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //a=first #, b=second #, c=count, d=operator, g=input box, h=equation
 const [a, setA] = useState('');
 const [b, setB] = useState('');
 const [c, setC] = useState(0);
 const [d, setD] = useState('');
 const [g, setG] = useState('');
 const [h, setH] = useState('');

 
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
    setH(prev=> prev + result)
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
  }
 };

 const clear = () =>{
  setA('');
  setB('');
  setC(0);
  setD('');
  setG('');
  setH('')
 }
 

  return ( 
    <>
    <p id='equation'>{h}</p>
    <input type="text" id='result' value={g} readOnly/>
    <div id='mainC'>
      <div>
        <button id='one' value={1} onClick={handleClick}>1</button>
        <button id='two' value={2} onClick={handleClick}>2</button>
        <button id='three' value={3} onClick={handleClick}>3</button>
      </div>
      <div>
        <button id='four' value={4} onClick={handleClick}>4</button>
        <button id='five' value={5} onClick={handleClick}>5</button>
        <button id='six' value={6} onClick={handleClick}>6</button>
      </div>
      <div>
        <button id='seven' value={7} onClick={handleClick}>7</button>
        <button id='eight' value={8} onClick={handleClick}>8</button>
        <button id='nine' value={9} onClick={handleClick}>9</button>
      </div>
        <button id='zero' value={0} onClick={handleClick}>0</button>
        <button id='plus' value={'+'} onClick={handleOperator}>+</button>
        <button id='minus' value={'-'} onClick={handleOperator}>-</button>
        <button id='multiply' value={'x'} onClick={handleOperator}>x</button>
        <button id='devide' value={'/'} onClick={handleOperator}>/</button>
        <button id='equals' onClick={handleEquation}>=</button>
        <button id='clear' onClick={clear}>C</button>
    </div>
    </>
  )
}

export default App
