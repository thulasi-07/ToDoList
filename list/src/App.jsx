import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='bg-red-600'>
        </div>
      </div>
      
    </>
  )
}

export default App
