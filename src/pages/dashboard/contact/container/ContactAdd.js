import React, { useState } from 'react'
import FormCheckBoxContact from '../../../../components/form/FormCheckBoxContact'
import FormInputContact from '../../../../components/form/FormInputContact'
import FormSelectContact from '../../../../components/form/FormSelectContact'
import FormTextAreaContact from '../../../../components/form/FormTextAreaContact'
import Card from '../../../../components/ui/Card'
import Navbar from '../../../../components/ui/Navbar'
import Sidebar from '../../../../components/ui/Sidebar'
import ContactAddFormAccountInfo from '../component/ContactAddFormAccountInfo'

const ContactAdd = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='bg-gray-100 w-full'>
      <div className="flex">
        <Sidebar />

        <main className='w-full'>
          <Navbar title='Contact Management' />
          <div className="content-container p-12 text-2xl font-semibold flex flex-col overflow-scroll">
            <form className='flex flex-col gap-8'>
              <Card title='Contact Account Information'>
                <ContactAddFormAccountInfo />
              </Card>

              <Card title='Contact Information'>
                <FormInputContact label='Identity Number'
                    required='true'
                    name='identityNumber'
                    placeholder='e.g 5288252258888852'
                    type='text'
                />

                <FormInputContact label='Upload Identity Number'
                    required='false'
                    name='identityFile'
                    placeholder='Upload File (Pdf, Png, Jpg)'
                    type='text'
                    disabled
                />

                <FormInputContact label='Phone Number'
                    required='true'
                    name='phone'
                    placeholder='e.g 082255569999'
                    type='text'
                />

                <FormInputContact label='Email'
                    required='true'
                    name='email'
                    placeholder='e.g john@example.com'
                    type='email'
                />

                <FormSelectContact label='Contact Preference'
                    required='false'
                    selectOption='Select Contact Preferences'
                    name='contactPreference'
                />
                
                <FormSelectContact label='Contact Origin'
                    required='false'
                    selectOption='Select Contact Origin'
                    name='origin'
                />

                <FormCheckBoxContact label='Owner Tax Number'
                  required='false'
                  type='checkbox'
                  name='taxNumber'
                  valueLabel={['Have NPWP',"Don't have NPWP",'Can Be Processed']}
                />

                <FormInputContact label='Tax Number'
                    required='false'
                    name='taxNumber'
                    placeholder='e.g 55258582525'
                    type='text'
                />
                
                <FormInputContact label='Associate To'
                    required='false'
                    name='associate'
                    placeholder='Seach Contact'
                    type='text'
                />

                <FormCheckBoxContact label='Company Info'
                  required='false'
                  type='checkbox'
                  name='isCompany'
                  valueLabel={['is Company?']}
                  change={() => setIsChecked(!isChecked)}
                />

                { isChecked ? (
                  <>
                    <FormInputContact label='Company Name'
                        required='true'
                        name='companyName'
                        placeholder='e.g PT Archment Villa'
                        type='text'
                    />
                    
                    <FormInputContact label='Company Tax Number'
                        required='false'
                        name='companyTaxNumber'
                        placeholder='e.g 55258582525'
                        type='text'
                    />
                    
                    <FormInputContact label='Company Address'
                        required='true'
                        name='companyAddress'
                        placeholder='e.g Beringin Street'
                        type='text'
                    />
                  </>
                ) : null}

                <div className="flex justify-end gap-3 mt-6">
                    <button type='button' 
                        className='text-sm border py-3 px-4 rounded-lg border-gray-500'>
                            Cancel
                    </button>
                    <button type='submit' 
                        className='text-sm border py-3 px-4 rounded-lg bg-orange-500 text-white'>
                            Save Data
                    </button>
                </div>
              </Card>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ContactAdd