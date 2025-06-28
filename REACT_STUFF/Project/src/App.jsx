import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import NavB from './components/navB';
import Home from './components/Home';
import Paste from './components/Paste';
import Vpaste from './components/Vpaste';

const router=  createBrowserRouter([
  {
    path:"/",element:
    <div>
       <NavB/>
      <Home/>
    </div>
  },
  {
    path:"/PSlice",
    element:
    <div>
      <NavB/>
      <Paste/>
    </div>

  },
  {
    path:"/PSlice/:id",
    element:
    <div>
       <NavB/>
      <Vpaste/>
    </div>

  },
  {
    path:"/PSlice/:id=15",
    element:
    <div>
       <NavB/>
       <Home/>
    </div>

  },
]
);

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
