import './App.css'
import React from 'react'
import Card from './components/Card'
function App() {
const [name, setName] = React.useState('');
  return (
    <div className="input">
      <div class="card">
      <Card name={name} title="card1" setName={setName}/>
      </div>
      <div class="card">
      <Card name={name} title="card2" setName={setName}/>
      </div>
    </div>
  )
}

export default App
