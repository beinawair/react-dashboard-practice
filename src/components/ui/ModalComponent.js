import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from './Card'

const ModalComponent = ({ children, isOpen, setIsOpen, size }) => {
  return (
    <div>
        <div className="fixed container z-20 w-1/2" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="bg-white relative p-4 rounded-md">
                <FontAwesomeIcon icon={faClose}
                    className='absolute top-3 right-4 cursor-pointer'
                    onClick={() => setIsOpen(false)}
                />
                <Card title='Advanced Search'>
                    {children}
                </Card>
            </div>
        </div>
        <div className="w-full h-full bg-black absolute top-0 left-0 opacity-75 z-10"></div>
    </div>
  )
}

export default ModalComponent