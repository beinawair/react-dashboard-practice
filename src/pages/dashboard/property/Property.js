import React from 'react'
import Card from '../../../components/ui/Card'
import Navbar from '../../../components/ui/Navbar'
import Sidebar from '../../../components/ui/Sidebar'
import PropertyTableList from './component/PropertyTableList'

const Property = () => {
  return (
    <div className='bg-gray-100 w-full relative'>
      <div className="flex">
        <Sidebar />

        <main className='w-full'>
          <Navbar title='Property' />
          <div className="content-container p-12 text-2xl font-semibold flex-1 overflow-scroll">
            <Card title='Property List'>
              <PropertyTableList />
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Property