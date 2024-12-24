import React from 'react'

const CompleteTask = () => {
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
    <div className='mt-2 '>
<button className='w-full'>Complete</button>
    </div>
</div>
  )
}

export default CompleteTask