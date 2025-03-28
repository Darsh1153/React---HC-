import React, { useContext } from 'react'
import { useState } from 'react'
import { CountContext } from './Context';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </div>
  )
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer></CountRenderer>
      <Buttons setCount={setCount}></Buttons>
    </div>
  )
}
function CountRenderer() {
  const count = useContext(CountContext);
  return (
    <div>{count}</div>
  )
}
function Buttons({setCount}) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>

      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease</button>
    </div>
  )
}

export default App
