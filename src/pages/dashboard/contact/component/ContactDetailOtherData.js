import React from 'react'

const ContactDetailOtherData = ({ contactData }) => {
  return (
    <div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Owner Tax Number</label>
            <p className='text-base font-medium max-w-md'>{contactData.ownerTaxNumber || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Contact Preference</label>
            <p className='text-base font-medium max-w-md'>{contactData.contactPreference || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Origins Contacts</label>
            <p className='text-base font-medium max-w-md'>{contactData.origin || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Associate To</label>
            <p className='text-base font-medium max-w-md'>{contactData.associateTo || '-'}</p>
        </div>
        <div className="mb-3">
            <label className='gray-secondary font-normal text-sm'>Commission</label>
            <p className='text-base font-medium max-w-md'>{contactData.comission || '-'}</p>
        </div>
    </div>
  )
}

export default ContactDetailOtherData