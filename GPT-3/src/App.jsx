import { useState } from 'react'
import {Article , Brand , CTA ,Navbar} from './components';
import {Footer , Blog, Possibility , Features, WhatWEB3 , Header} from './containers'
import './App.css'
import './index.css'
function App() {
 
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <WhatWEB3 />
      <Features />
      <Possibility/>
      <CTA />
      <Blog />
      <Footer/>
    </div>
  )
}

export default App
