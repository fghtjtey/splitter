import React from 'react'
import { Right } from './components'
import Left from './components/Left/Left'

function App() {
  return (
    <div className='h-full flex items-center justify-center'>
      <div className='bg-white w-full max-w-[920px] rounded-3xl py-8 pr-8 pl-12 flex gap-2 justify-between'>
        <Left/>
        <Right/>
      </div>
    </div>
  )
}

export default App
