import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <h1>🍕 Luno Pizza</h1>
        <p>Добро пожаловать в React приложение</p>
      </header>
      <main className="main">
        <div className="card">
          <h2>Счётчик</h2>
          <p>Нажатий: {count}</p>
          <button onClick={() => setCount((c) => c + 1)}>
            Нажми меня
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
