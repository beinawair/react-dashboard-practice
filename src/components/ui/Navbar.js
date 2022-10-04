import React, { useContext, useState } from 'react'
import { UserContext } from '../../helper/UserContext'

const Navbar = ({ title }) => {
  const { isActive, setIsActive } = useContext(UserContext)
  const [openMenu, setOpenMenu] = useState(false)

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    localStorage.clear();
    window.location.href = '/login'
  }

  return (
    <nav className='bg-white p-4 relative h-[60px] flex justify-center items-center'>
      <div className='container flex justify-between items-center'>
        <div className="flex gap-8">
          <img src="/img/burger-menu.svg" alt="menu"
            className='cursor-pointer'
            onClick={() => setIsActive(!isActive)} />
          <h2 className='font-normal text-md'>{title}</h2>
        </div>

        <div className="flex cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
          <img src="/img/user.png" alt="user" className='w-10'/>
          <img src="/img/chevron-down.svg" alt="arrowDown" className='w-5' />
        </div>
        {openMenu ? (
          <div className="menu-profile flex flex-col p-4 bg-white shadow-lg rounded-lg">
            <p className='text-small text-gray-500 mb-3'>VERSION 1.0.0</p>
            <div className="flex">
              <ul className='w-full'>
                <li className='p-3 flex items-center gap-2 hover:bg-gray-100 w-full rounded-md cursor-pointer'>
                  <img src="/img/dark-mode.svg" alt="darkMode" className='w-5' />
                  <p className='text-xs font-medium gray-secondary'>Dark Mode</p>
                </li>
                <li className='p-3 flex items-center gap-2 hover:bg-gray-100 w-full rounded-md cursor-pointer' onClick={handleLogout}>
                  <img src="/img/back-arrow.svg" alt="darkMode" className='w-5' />
                  <p className='text-xs font-medium gray-secondary'>Logout</p>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar