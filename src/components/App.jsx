import { useState } from 'react'
import Signup from './signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='flex justify-center align-middle h-screen p-12'>
      <Signup />
    </main>
      
    </>
  )
}

export default App
