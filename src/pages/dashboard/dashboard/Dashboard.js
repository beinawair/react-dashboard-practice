import React from 'react'
import Navbar from '../../../components/ui/Navbar'
import Sidebar from '../../../components/ui/Sidebar'

const Dashboard = () => {
  return (
    <div className='bg-gray-100 w-full'>
      <div className="flex">
        <Sidebar />

        <main className='w-full'>
          <Navbar title='Dashboard' />
          <div className="content-container p-12 text-2xl font-semibold flex-1">
            <h1 className='text-3xl font-normal mb-2'>Welcome again, <span className='font-bold'>Jimmy!</span></h1>
            <p className='text-sm text-gray-500'>Hi Jimmy, don't forget to control every activity that exist</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard