import { useState } from 'react'
import './App.css'
import UserCard from '../components/UserCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <UserCard name="ZAZA MERCHANT"/>
    <UserCard name="YAVAR"/>
    <UserCard name="ZURI"/>
    <UserCard name="POOKIEMAN"/>
    </div>
  )
}

export default App
