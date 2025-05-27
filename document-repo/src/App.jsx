import './App.css'
import { MultiSelect } from './components'

function App() {

  return (
    <>
        <MultiSelect 
          label="Assign Coders"
          name="coders"
          options={["Alice", "Bob", "Charlie", "David"]}
        />
    </>
  )
}

export default App
