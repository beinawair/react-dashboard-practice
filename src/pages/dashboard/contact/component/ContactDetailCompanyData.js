import React from 'react'

const ContactDetailCompanyData = ({ contactData }) => {
  return (
    <div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Company Name</label>
            <p className='text-base font-medium max-w-md'>{contactData.companyName || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Company Tax Number</label>
            <p className='text-base font-medium max-w-md'>{contactData.companyTaxNumber || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Company Address</label>
            <p className='text-base font-medium max-w-md'>{contactData.companyAddress || '-'}</p>
        </div>
    </div>
  )
}

export default ContactDetailCompanyData