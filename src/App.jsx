import { useState } from 'react'
import './App.css'
import {Search} from './Components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Search />
 <h1>heelo</h1>
 </>
  )
}

export default App
