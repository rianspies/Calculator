import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [a, setA] = useState('');
 const [b, setB] = useState('');
 const [c, setC] = useState(false);
 const [d, setD] = useState('')
 const [result, setResult] = useState('');

//sets first and second value
 const handeClick = (e) =>{
  if (c == false){
    setA(a + e.target.value)
  } else {
    setB(b + e.target.value)
  }
 };

 
//handles +-*/ operations
 const operations = (e) =>{
  setC(true);
  const first = Number(a);
  const second = Number(b);
  if (e.target.value == 'plus'){
    setResult(first + second)
  } else if(e.target.value == 'minus'){
    setResult(first - second)
  } else if(e.target.value == 'multiply'){
    setResult(first*second)
  } else if(e.target.value == 'devide'){
    setResult(first/second)
  } else {
    console.log('not working')
  }
 }

 //changes value of input dynamically
 /*const handleResult = (e) =>{
  if (c == false){
    setD()
  } else {
    console.log('not working')
  }
 }*/

 

  return ( 
    <>
    <div id='mainC'>
      <input type="text" id='result' value={a}/>
      <button id='one' value={1} onClick={handeClick}>1</button>
      <button id='two' value={2} onClick={handeClick}>2</button>
      <button id='three' value={3} onClick={handeClick}>3</button>
      <button id='four' value={4} onClick={handeClick}>4</button>
      <button id='five' value={5} onClick={handeClick}>5</button>
      <button id='six' value={6} onClick={handeClick}>6</button>
      <button id='seven' value={7} onClick={handeClick}>7</button>
      <button id='eight' value={8} onClick={handeClick}>8</button>
      <button id='nine' value={9} onClick={handeClick}>9</button>
      <button id='zero' value={0} onClick={handeClick}>0</button>
      <button id='plus' value={'plus'} onClick={operations}>+</button>
      <button id='minus' value={'minus'} onClick={operations}>-</button>
      <button id='multiply' value={'multiply'} onClick={operations}>x</button>
      <button id='devide' value={'devide'} onClick={operations}>/</button>
      <button id='equals'>=</button>
      <button id='clear'>C</button>
    </div>
    </>
  )
}

export default App
