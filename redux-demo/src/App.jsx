import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './feature/counter/counterSlice'

function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  return (
    <>
      <h1>Count :{count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default App
