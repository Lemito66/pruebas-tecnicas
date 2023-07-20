import { useState } from 'react'
// import './App.css'
import { ListOfBooks } from './components/listOfBooks'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListOfBooks />
    </>
  )
}

export default App
