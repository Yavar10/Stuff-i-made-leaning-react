import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Logout from './components/logout'

function App() {
  const [log, whatlog] = useState(false)

  if(log)
  {
    return (
      <Logout log={log} whatlog={whatlog}/>
    )
  }
  else
  {
    return (
      <Login log={log} whatlog={whatlog}/>
    )
  }
}

export default App
