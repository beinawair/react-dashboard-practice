import React, { useState } from 'react'
import PropertyFilterOption from './PropertyFilterOption'
import PropertyListTable from './PropertyListTable'

const PropertyTableList = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='container'>
        <div className="flex gap-4">
            <PropertyFilterOption label='Filter Status' after='/img/chevron-down-arrow.svg'/>
            <button type='button'
                className="text-gray-500 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border-btn" 
                onClick={() => setIsOpen(true)}
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
            > 
                <img src='/img/advanced-filter.svg' className='w-5 ml-2' alt="arrow" />
                Advanced Filter
            </button>
        </div>
        <PropertyListTable isOpen={isOpen} setIsOpen={setIsOpen} />     
    </div>
  )
}

export default PropertyTableList