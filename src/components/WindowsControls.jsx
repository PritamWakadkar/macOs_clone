import React from 'react'
import useWindowStore from '../store/Window'

const WindowsControls = ({target}) => {

  const {closeWindow} = useWindowStore()

  return (
    <div id='window-flex gap-2'>
      <div className='size-3.5 rounded-full bg-[#ff6157] cursor-pointer'  onClick={()=>closeWindow(target)} />
      <div className='size-3.5 rounded-full bg-[#ffc030]'   />
      <div  className='size-3.5 rounded-full bg-[#2acb42]'/>
    </div>
  )
}

export default WindowsControls