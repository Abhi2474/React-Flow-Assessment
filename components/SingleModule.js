import React from 'react'

export const SingleModule = (props) => {

	const { item } = props
	// console.log(item)
	// console.log(props)

	return (
		<>
			<button className=' border-2 border-green-200 w-4/5  mt-4 flex rounded-lg mx-auto'>
				<div className='text-center py-1 border-r-2 border-green-200 w-1/6 text-xl font-bold'>{item.input_type.toUpperCase()}</div>
				<div className='py-2 text-sm w-2/3 font-bold bg-green-50 px-2'>{item.name}</div>
				<div className='text-center py-1 border-l-2 border-green-200 w-1/6 text-xl font-bold'>{item.output_type.toUpperCase()}</div>
			</button>
		</>
	)
}
