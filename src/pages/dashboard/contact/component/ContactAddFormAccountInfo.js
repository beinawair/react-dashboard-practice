import React from 'react'
import FormInputContact from '../../../../components/form/FormInputContact'
import FormSelectContact from '../../../../components/form/FormSelectContact'
import FormTextAreaContact from '../../../../components/form/FormTextAreaContact'

const ContactAddFormAccountInfo = () => {
  return (
    <div>
        <FormInputContact label='Fullname'
            required='true'
            name='fullName'
            placeholder='Type fullname here'
            type='text'
        />

        <FormSelectContact label='Status Salutation'
            required='true'
            selectOption='Select Status Salutation'
            name='salutation'
        />
        
        <FormSelectContact label='Contact Type'
            required='true'
            selectOption='Select Contact Type'
            name='contactType'
        />
        
        <FormSelectContact label='Country'
            required='false'
            selectOption='Select Country'
            name='country'
        />

        <FormTextAreaContact label='Address'
            required='false'
            placeholder='Type address here'
            name='address'
        />
    </div>
  )
}

export default ContactAddFormAccountInfo