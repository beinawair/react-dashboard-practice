import React from 'react'
import Card from '../../../../components/ui/Card'
import Navbar from '../../../../components/ui/Navbar'
import Sidebar from '../../../../components/ui/Sidebar'

const ContactEdit = () => {
  return (
    <div className='bg-gray-100 w-full'>
      <div className="flex">
        <Sidebar />

        <main className='w-full'>
          <Navbar title='Contact Management' />
          <div className="content-container p-12 text-2xl font-semibold flex-1 overflow-scroll">
            <Card title='Contact Account Information'>
              
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ContactEdit