import { InputName } from '@/components/InputName'
import Link from 'next/link'
import React, { useContext } from 'react'
import { DataContext } from './_app'

const work = () => {

  const moduleData = useContext(DataContext)

  return (
    <>
      <div className='bg-green-100'>
        <ul className='flex py-2 px-2'>
          <li className='my-2 mx-4 text-xl italic'> <Link href="/">Workflows</Link> </li>
        </ul>
      </div>
      <div className='grid grid-rows-3 border w-1/2 mx-auto mt-4 '>
        <div className='border grid grid-cols-3 text-xl bg-blue-200'>
          <div className='border py-1 px-3'>Name</div>
          <div className='border py-1 px-3'>Input Type</div>
          <div className='border py-1 px-3'>CreatedAt</div>
        </div>
        {moduleData.map((item, idx) => (
          item.workflowId ?
            <div key={item.id} className={`border grid grid-cols-3 ${idx % 2 ? 'bg-slate-100' : ''}`}>
              <InputName key={item.id} item={item} />
            </div>
            : ''

        ))}
      </div>
    </>
  )
}
export default work