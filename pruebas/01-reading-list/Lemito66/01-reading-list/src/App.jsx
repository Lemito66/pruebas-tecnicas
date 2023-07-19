import { useState } from 'react'
import './App.css'
import { ListOfBooks } from './components/listOfBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListOfBooks />
    </>
  )
}

export default App
