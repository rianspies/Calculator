import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //a=first #, b=second #, c=count, d=operator, f=result, g=input box
 const [a, setA] = useState('');
 const [b, setB] = useState('');
 const [c, setC] = useState(0);
 const [d, setD] = useState('');
 const [f, setF] = useState('');
 const [g, setG] = useState();

 //changes input box to correct numbers
 /*const input = () =>{
  if(c == 0){
    setG(a)
    console.log(g)
  } else if(c == 1){
    setG(b)
  } else {
    setG(f)
  }
 };*/

 
 const handleClick = (e) =>{
  let input = e.target.value;
  if(c == 0){
    setA(a+=input);
    console.log(a)
    setG(input)
  } else if(c == 1){
    setB(input+=b);
    setG(input)
  }
 };

 const handleOperator = (e) =>{
  setD(e.target.value);
  setC(1)
 };

 const handleEquation = () =>{
  const first = Number(a);
  const second = Number(b);
  let r=0
  if(d == 'plus'){
    r=first + second;
    setF(r);
    setG(r)
  } else if(d == 'minus'){
    r=first - second;
    setF(r);
    setG(r)
  } else if(d == 'devide'){
    r=first/second;
    setF(r);
    setG(r)
  } else if(d == 'multiply'){
    r=first*second;
    setF(r);
    setG(r)
  }
 }



 

  return ( 
    <>
    <div id='mainC'>
      <input type="text" id='result' value={g}/>
      <button id='one' value={1} onClick={handleClick}>1</button>
      <button id='two' value={2} onClick={handleClick}>2</button>
      <button id='three' value={3} onClick={handleClick}>3</button>
      <button id='four' value={4} onClick={handleClick}>4</button>
      <button id='five' value={5} onClick={handleClick}>5</button>
      <button id='six' value={6} onClick={handleClick}>6</button>
      <button id='seven' value={7} onClick={handleClick}>7</button>
      <button id='eight' value={8} onClick={handleClick}>8</button>
      <button id='nine' value={9} onClick={handleClick}>9</button>
      <button id='zero' value={0} onClick={handleClick}>0</button>
      <button id='plus' value={'plus'} onClick={handleOperator}>+</button>
      <button id='minus' value={'minus'} onClick={handleOperator}>-</button>
      <button id='multiply' value={'multiply'} onClick={handleOperator}>x</button>
      <button id='devide' value={'devide'} onClick={handleOperator}>/</button>
      <button id='equals' onClick={handleEquation}>=</button>
      <button id='clear'>C</button>
    </div>
    </>
  )
}

export default App
