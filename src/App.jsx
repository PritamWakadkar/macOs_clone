 import React from 'react'
 import gsap from 'gsap'
 import { Draggable } from 'gsap/Draggable' 
 import Terminal from '#windows/Terminal'
 import Navbar from '#components/Navbar'
 import Welcomepage from './components/Welcomepage'
 import Dock from './components/Dock'
 
 gsap.registerPlugin(Draggable);


 const App = () => {
   return (
     <main>
      <Navbar />
      <Welcomepage />
      <Dock />


      <Terminal />
     </main>
   )
 }
 
 export default App