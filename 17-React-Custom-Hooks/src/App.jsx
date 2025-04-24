import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'
import useCopyToClipboard from './hooks/useCopyToClipboard'

function App() {
  const [copied, copy] = useCopyToClipboard("Pes etme çalış");
  return (
    <div>
      {copied && 'kopyalandı'}
      <button onClick={copy}>Kopyala</button>
    </div>
  )
}

export default App
