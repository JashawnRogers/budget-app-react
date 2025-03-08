import React from 'react'
import Aside from '../components/commonComponents/Aside'
import Graphs from '../components/Graphs'

const Dashboard = () => {
  return (
    <div className='bg-gradient-to-b from-green-200 to white h-screen grid grid-cols-[15%_85%] gap-x-4 '>
      <aside className=''>
        <Aside />
      </aside>
      <main className='mt-5'>
        <Graphs />
      </main>
    </div>
  )
}

export default Dashboard