import { useState } from 'react'
import './App.jsx'
import ListUser from './component/listUser.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListUser />
    </>
  )
}

export default App;