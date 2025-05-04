import './App.css'

function App() {

  function oclick()
  {
    const audio = new Audio('../public/nice-sound-effect-95595.mp3');
    audio.play();
  }

  

  return (
    <div className='tt'>
      <p>The Fucking Clickable button</p>
     <button onClick={oclick}>
      Click The fuck out of me
     </button>
     </div>
  )
}

export default App
