import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../../../components/ui/Card'
import Navbar from '../../../../components/ui/Navbar'
import Sidebar from '../../../../components/ui/Sidebar'
import { contact } from '../../../../config/menuLists'
import ContactDetailCompanyData from '../component/ContactDetailCompanyData'
import ContactDetailContactAccount from '../component/ContactDetailContactAccount'
import ContactDetailOtherData from '../component/ContactDetailOtherData'
import ContactDetailPersonalData from '../component/ContactDetailPersonalData'

const ContactDetail = () => {
  const [contactData, setContactData] = useState({});
  const { id } = useParams();
  const contacts = contact;
  const newData = contacts.find(contact => contact.id === Number(id))

  const filterData = () => {
    setContactData(newData)
  }

  useEffect(() => {
    filterData();
  })

  return (
    <div className='bg-gray-100 w-full'>
      <div className="flex">
        <Sidebar />

        <main className='w-full'>
          <Navbar title='Contact Management' />
          <div className="content-container p-12 text-2xl font-semibold flex-1 overflow-scroll">
            <div className="flex justify-between">
              <h2 className='text-3xl font-normal mb-2'>Contact Detail</h2>
              <div className="flex gap-3 mb-6">
                <button className='bg-[#0EC837] py-2 px-6 text-sm text-white rounded-md'>Back</button>
                <button className='bg-[#2767E1] py-2 px-6 text-sm text-white rounded-md'>Edit</button>
                <button className='bg-[#FF1010] py-2 px-6 text-sm text-white rounded-md'>Delete</button>
              </div>
            </div>

            <div className='container mb-5'>
              <div className="bg-white rounded-xl p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h3>{contactData.name}</h3>
                    <p className='text-sm gray-secondary'>{contactData.email}</p>
                  </div>
                  <p className='text-sm text-white rounded-xl px-8 bg-[#0EC837]'>{contactData.status}</p>
                </div>
              </div>
            </div>
            
            <div className="flex w-full gap-4 justify-between">
              <div className="flex-grow flex-1 flex gap-4 flex-col">
                <Card title='Personal Data'>
                  <ContactDetailPersonalData contactData={contactData} />
                </Card>

                <Card title='Company Data'>
                  <ContactDetailCompanyData contactData={contactData} />
                </Card>
              </div>

              <div className="flex-grow flex-1 flex gap-4 flex-col">
                <Card title='Other Data'>
                  <ContactDetailOtherData contactData={contactData} />
                </Card>

                <Card title='Contact Account'>
                  <ContactDetailContactAccount contactData={contactData} />
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ContactDetail