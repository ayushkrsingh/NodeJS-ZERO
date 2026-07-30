import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Checking the backend...')

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) throw new Error('Backend request failed')
        return response.json()
      })
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Could not connect to the backend. Is it running on port 4000?'))
  }, [])

  return (
    <main className="app">
      <p className="eyebrow">React + Express</p>
      <h1>Frontend is ready.</h1>
      <p>{message}</p>
    </main>
  )
}

export default App
