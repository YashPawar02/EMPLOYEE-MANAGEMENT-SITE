import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h4 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h4>
            <h4 className='text-base'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle} </h2>
            <p className='text-sm mt-2'>
             {data.taskDescription}
            </p>
            <div className='flex justify-between mt-4'>
            <button className='bg-amber-400 py-1 px-2 text-sm'>Mark as completed</button>
            <button  className='bg-red-400 py-1 px-2 text-sm'>Mark as failed</button>
            </div>
        </div>
  )
}

export default AcceptTask