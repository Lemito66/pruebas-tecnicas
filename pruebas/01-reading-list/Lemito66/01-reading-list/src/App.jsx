import { useState } from 'react'
// import './App.css'
import { ListOfBooks } from './components/listOfBooks'
import { BasicExample } from './components/CardInfo'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListOfBooks />
      {/* <BasicExample /> */}
    </>
  )
}

export default App
