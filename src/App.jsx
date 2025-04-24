// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as R,Routes,Route} from 'react-router-dom'
import { Home } from './Components/Main/Home/Home'
import { About_Us } from './Components/Main/About_Us/About_Us'
import { Services } from './Components/Main/Servises/Services'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <R>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        {/* <Route  path='/about_us' element={<About_Us/>}/>
        <Route  path='/services' element={<Services/>}/> */}
        <Route  path='*' element={<Home/>}/>
      </Routes>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </R>
  )
}

export default App
