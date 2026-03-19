import dayjs from 'dayjs'
import React from 'react'
import {  navLinks,navIcons } from '../constants'

 

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/public/images/logo.svg" alt='logo' />
            <p className='font-bold'>pritam's OS</p>

            <ul>
              {navLinks.map(({id,name})=>(
                <li key={id}>{name}</li>
              ))}
            </ul>
        </div>
        <div>
          <ul>
            {navIcons.map(({id,img})=>(
              <li key={id}>
                <img src={img} alt={`icon-${id}`} className='icon-hover' />
              </li>
            ))}
          </ul>
          <time dateTime="">{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
  )
}

export default Navbar