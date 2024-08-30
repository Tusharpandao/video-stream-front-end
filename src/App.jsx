import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoUpload from './components/VideoUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center flex-col items-center space-y-9 py-9 '>
    <h1 className="text-3xl font-bold underline">
      Welcome to video Streaming Application
    </h1>

    <VideoUpload/>
    </div>
    </>
  )
}

export default App
