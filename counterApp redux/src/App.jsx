
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, reset } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(increment());
  }
  const handleClickDecrement = () => {
    dispatch(decrement());
  }
  const resetButton = () => {
    dispatch(reset());
  }

  return (
    <div>
      <div className='container'>Counter App
        <button onClick={handleClickIncrement}>+</button>
        <p>count: {count}</p>
        <button onClick={handleClickDecrement}>-</button>
        <button onClick={resetButton}>Reset value</button>
      </div>   
    </div>
  )
}

export default App



// src/App.jsx
// import { useDispatch, useSelector } from 'react-redux'
// import './App.css'
// import { increment, decrement } from './features/counter/counterSlice'

// function App() {
//   const count = useSelector((state) => state.counter.value) // ✅ FIXED: state.counter
//   const dispatch = useDispatch()

//   // ✅ FIXED: no naming conflict with action creators
//   const handleIncrement = () => {
//     dispatch(increment())
//   }

//   const handleDecrement = () => {
//     dispatch(decrement())
//   }

//   return (
//     <div>
//       <div className='container'>
//         <h2>Counter App</h2>
//         <button onClick={handleIncrement}>+</button>
//         <p>Count: {count}</p>
//         <button onClick={handleDecrement}>-</button>
//       </div>
//     </div>
//   )
// }

// export default App
