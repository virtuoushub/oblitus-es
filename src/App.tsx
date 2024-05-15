import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// FIXME: needed to extract, or else whitespace was being truncated, e.g. "Editsrc/App.tsx and save to test HMR"
const ParagraphText = () => <>Edit <code>src/App.tsx</code> and save to test HMR</>;

function App() {
  const [count, setCount] = useState(0)

  // FIXME: needed to extract, or else trailing space was getting truncated, e.g. "count is0"
  const buttonText = `count is ${count}`;
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev/learn/react-compiler" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Compiler</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {buttonText}
        </button>
        <p>
          <ParagraphText />
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
