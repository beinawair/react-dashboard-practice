import React from 'react'

const ContactDetailContactAccount = ({ contactData }) => {
  return (
    <div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Contact Type</label>
            <p className='text-base font-medium max-w-md'>{contactData.status || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Email Address</label>
            <p className='text-base font-medium max-w-md'>{contactData.emailContact || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Current Password</label>
            <div className="flex justify-between items-center">
                <p className='text-base font-medium max-w-md'>{contactData.currentPassword || '******************'}</p>
                <a href="#" className='text-sm font-normal text-blue-600'>Change Password</a>
            </div>
        </div>
    </div>
  )
}

export default ContactDetailContactAccount