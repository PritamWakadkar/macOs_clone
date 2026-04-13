import React from 'react'
import { techStack } from '../constants'
import { Check, CheckCheck, Flag } from 'lucide-react'
import WindowWrapper from '../hoc/WindowWrapper'
import WindowsControls from '../components/WindowsControls'

const Terminal = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className='flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 text-sm text-gray-400'>
       <WindowsControls target="terminal" />
        <h2 className='font-bold text-center w-full text-gray-500'>
          Tech stack
        </h2>
      </div>

      {/* Body */}
      <div className='text-sm font-roboto p-4 sm:p-6 bg-gray-50 rounded-b-lg'>
        
        <p className="break-words">
          <span className='font-bold'>@pritam % </span>
          show tech stack
        </p>

        {/* Table header */}
        <div className='hidden sm:flex items-center mt-6 text-gray-500'>
          <p className='w-32'>Category</p>
          <p className='ml-10'>Technologies</p>
        </div>

        {/* Content */}
        <ul className='py-4 my-4 border-y border-dashed space-y-3'>
          {techStack.map(({ category, items }) => (
            <li
              key={category}
              className='flex flex-col sm:flex-row sm:items-center gap-2'
            >
              {/* Category */}
              <div className='flex items-center gap-2 sm:w-32'>
                <Check className='text-[#00A154]' size={20} />
                <h3 className='font-semibold text-[#00A154]'>
                  {category}
                </h3>
              </div>

              {/* Technologies */}
              <ul className='flex flex-wrap gap-2 sm:ml-6'>
                {items.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p className='flex items-center justify-start gap-2'>
            <CheckCheck size={20} className='text-[#00A154]' />
            5 fo 5 stack loaded succesfully(100%)
          </p>
          <p  className='flex items-center justify-start gap-2'>
            <Flag size={20} className='text-black' fill='black' />
            Render size: 6ms
          </p>
        </div>

      </div>
    </div>
  )
}
const terminalWindow = WindowWrapper(Terminal , 'terminal'); 

export default terminalWindow;