import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const authData=useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded-lg h-48 ' >
      <div className='bg-gray-700 mb-2 py-2 px-4 flex justify-between rounded-lg'>
        <h2 className='text-lg font-light w-1/5 '>Employee name</h2>
        <h3 className='text-lg font-light w-1/5 '>new Task</h3>
        <h5 className='text-lg font-light w-1/5 '>Active Task</h5>
        <h5 className='text-lg font-light w-1/5 '>Completed</h5>
        <h5 className='text-lg font-light w-1/5 '>Failed</h5>
     </div>
    <div className='h-[80%] overflow-auto'>
    {authData.employees.map(function (elem,idx) {
      return <div key={idx} className='border bg-gray-700 mb-2 py-2 px-4 flex justify-between rounded-lg'>
        <h2 className='text-lg font-light w-1/5 '>{elem.firstName}</h2>
        <h3 className='text-lg font-light w-1/5 '>{elem.taskNumbers.active}</h3>
        <h5 className='text-lg font-light w-1/5 '>{elem.taskNumbers.newTask}</h5>
        <h5 className='text-lg font-light w-1/5 '>{elem.taskNumbers.completed}</h5>
        <h5 className='text-lg font-light w-1/5 '>{elem.taskNumbers.failed}</h5>
     </div>
    })}
    </div>
    
    </div>
  )
}

export default AllTask