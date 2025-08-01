
import './App.css'

import Home from './components/Home'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='app'>
      <Home/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
