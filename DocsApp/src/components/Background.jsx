import React from 'react'

const Background = () => {
  return (
    <>
     <div className='relative w-full h-screen bg-zinc-800'>
    <div className='absolute bg-sky-200 top-[5%] w-full py-10 flex justify-center text-zinc-900 font-semibold '>
      Documents
    </div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-none font-semibold text-zinc-900'>Docs</h1>
    </div>
    </>
  )
}

export default Background