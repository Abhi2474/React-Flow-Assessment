import React from 'react'
import Link from 'next/link';

export const InputName = (props) => {

	const { item } = props

	// console.log(props)
	// console.log(item.name)

	return (
		<>
			<div className='border py-1 px-3'>
				<Link href='flowlist'>{item.name}</Link>
			</div>
			<div className='border py-1 px-3'>{item.input_type}</div>
			<div className='border py-1 px-3'>{item.createdAt.substring(0, 10)}</div>
		</>
	)
}
