import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { filterList } from '../../../../config/menuLists'

const PropertyFilterOption = ({ label, before, after }) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative'>
        <button id="dropdownDefault" 
            data-dropdown-toggle="dropdown" 
            className="text-gray-500 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border-btn" 
            type="button"
            onClick={() => setIsOpen(!isOpen)}
        > 
            {before ?  (<img src={before} className='w-5 ml-2' alt="arrow" />) : null}

            {label}

            {after ? (<img src="/img/chevron-down-arrow.svg" className='w-5 ml-2' alt="arrow" />) : null }
            
        </button>
        {isOpen ? (
            <div id="dropdown" className={`${isOpen ? '' : 'hidden' } absolute z-10 w-44 bg-gray-700 rounded divide-y divide-gray-100 text-white shadow dark:bg-gray-700`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    {filterList?.map((status, i) => (
                        <li key={i}>
                            <Link to={'#'} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-white hover:text-gray-600">
                                {status.active === true ? <FontAwesomeIcon icon={faCheck} /> : null} {status.status}
                            </Link>
                        </li>
                    ))}
                    
                </ul>
            </div>
        ) : null}
        
    </div>
  )
}

export default PropertyFilterOption