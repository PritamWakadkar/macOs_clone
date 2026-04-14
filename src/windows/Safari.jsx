import React from 'react'
import {WindowsControls} from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper' 

const Safari = () => {
  return (
    <>
     <div id='window-header' className='flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400'>
      <WindowsControls />
      </div>   
    </>
  )

}

  const safariWindow = WindowWrapper(Safari ,"Safari") 


export default safariWindow