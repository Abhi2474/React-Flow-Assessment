import React, { useContext } from 'react'
import Link from 'next/link';
import { DataContext } from '../_app';
import ReactFl from '@/components/ReactFl';

const flowlist = ({ data, listData }) => {

	const moduleData = useContext(DataContext)

	return (
		<>
			<div className='bg-green-100'>
				<ul className='flex py-2 px-2'>
					<li className='my-2 mx-4 text-xl italic font-bold'> <Link href="/">Workflow name: {listData.name}</Link> </li>
				</ul>
			</div>
			<ReactFl data={data} />
		</>

	)
}

export default flowlist

export async function getServerSideProps({ query }) {

	const module = await fetch('https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=1&limit=5');

	const data = await module.json();

	const list = await fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/workflow/${query.flowlist}`);

	const listData = await list.json();

	return {
		props: {
			data,
			listData
		},
	};
}