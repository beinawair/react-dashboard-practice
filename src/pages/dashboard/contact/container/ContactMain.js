import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../../components/ui/Card'
import Navbar from '../../../../components/ui/Navbar'
import Sidebar from '../../../../components/ui/Sidebar'
import { contact } from '../../../../config/menuLists'
import { URLAddContact, URLContactDetail } from '../../../../routes/pathURL'

const ContactMain = () => {
  return (
    <div className='bg-gray-100 w-full'>
      <div className="flex">
        <Sidebar />

        <main className='w-full'>
          <Navbar title='Contact Management' />
          <div className="content-container p-12 text-2xl font-semibold flex-1 overflow-scroll">
            <Card title='Manage Contact Management' 
              subTitle='Manage all contact management here'
              buttonLabel='Add New'
              link={URLAddContact}
            >
              <div className="mt-2 flex gap-2 justify-between items-center flex-wrap">
                {contact !== null ? ( contact.map((user, i) => (
                    <div key={i} className="border border-gray-400 rounded-lg w-52 p-4">
                      <Link to={URLContactDetail(user.id)}>
                        <h4 className='text-[1rem]'>{user.name}</h4>
                      </Link>
                      <p className='gray-secondary text-sm mt-2'>{user.phone}</p>
                      <p className='gray-secondary text-sm mt-2'>{user.email}</p>
                      <div className="flex gap-5 mt-4">
                        <Link to={''} className='text-blue-500 font-normal text-sm'>
                          Edit
                        </Link>
                        <Link to={''} className='text-blue-500 font-normal text-sm'>
                          Remove
                        </Link>
                      </div>
                    </div>
                ))
                ) : null}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ContactMain