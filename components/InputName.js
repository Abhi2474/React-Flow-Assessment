import React from 'react'
import Link from 'next/link';

export const InputName = (props) => {

	const { item } = props

	return (
		<>
			<Link className='border py-1 px-3 hover:underline' href={`flowlist/${item.id}`}>
				{item.name}
			</Link>
			<div className='border py-1 px-3'>{item.input_type}</div>
			<div className='border py-1 px-3'>{item.createdAt.substring(0, 10)}</div>
		</>
	)
}
