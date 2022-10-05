import React from 'react'

const ContactDetailPersonalData = ({ contactData }) => {
  return (
    <div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Full Name</label>
            <p className='text-base font-medium'>{contactData.fullName || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Status Salutation</label>
            <p className='text-base font-medium'>{contactData.salutation || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Phone Number</label>
            <p className='text-base font-medium'>{contactData.phoneContact || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Identity Number</label>
            <p className='text-base font-medium'>{contactData.identityNumber || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Identity Number File</label>
            <img src={contactData.img || ''} alt="img" />
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Address</label>
            <p className='text-base font-medium max-w-md'>{contactData.address || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Created By</label>
            <p className='text-base font-medium'>{contactData.createdBy || '-'}</p>
            <p className='text-sm gray-secondary font-normal'>{contactData.createdAt || '-'}</p>
        </div>
    </div>
  )
}

export default ContactDetailPersonalData