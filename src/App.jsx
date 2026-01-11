import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [a, setA] = useState('');
 const [b, setB] = useState('');
 const [c, setC] = useState(false);
 const [result, setResult] = useState();

 const handeClick = (e) =>{
  if (c == false){
    setA(a + e.target.value)
  } else {
    setB(b + e.target.value)
  }
 };

 

 const operations = (e, a, b) =>{
  setC(true);
  if (e.target.value == 'plus'){
    setResult(a + b)
    console.log(a)
  }
 }

 

  return ( 
    <>
    <div id='mainC'>
      <input type="text" id='result' value={a} onChange={handeClick}/>
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
      <button id='minus'>-</button>
      <button id='multiply'>x</button>
      <button id='devide'>/</button>
      <button id='equals'>=</button>
      <button id='clear'>C</button>
    </div>
    </>
  )
}

export default App
