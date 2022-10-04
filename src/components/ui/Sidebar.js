import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { menu } from '../../config/menuLists'
import { UserContext } from '../../helper/UserContext'

const Sidebar = () => {
  const { isActive } = useContext(UserContext)

  return (
    <div className={`${isActive ? 'w-80' : 'w-20'} duration-300 h-screen bg-white py-2`}>
      <div className="w-100 flex flex-col justify-center items-center">
        <img src="/img/VBM-Logo.svg" 
          className={`flex justify-center items-center ${!isActive && 'animate-spin-once'} duration-300`} 
          alt="logo" />
        <ul className="mt-14">
          {menu.map((item, i) => (
            <NavLink to={item.link} key={i} activeClassName='active'>
              <li key={i} 
                className='menu-item menu-list text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2'
              >
                  <img src={item.src} alt={item.title} className='' />
                  <span className={`${!isActive && 'hidden'} duration-700 origin-left`}>{item.title}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar