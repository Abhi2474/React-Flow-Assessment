import React, { useContext, useEffect, useState } from 'react'
import { ReactFl } from "@/components/ReactFl";
// import RFlow from "@/components/RFlow";
import { SingleModule } from '@/components/SingleModule';
import Link from 'next/link';
import { DataContext } from '../_app';

const flowlist = ({ data, listData }) => {

	// const params = useParams

	const moduleData = useContext(DataContext)
	console.log(moduleData)
	return (
		<>
			<div className='bg-green-100'>
				<ul className='flex py-2 px-2'>
					<li className='my-2 mx-4 text-xl italic font-bold'> <Link href="/">Workflow name: {listData.name}</Link> </li>
				</ul>
			</div>
			<div className='flex justify-between'>
				<div className='w-1/3 border flex justify-between flex-col'>
					<div className='border h-16 text-xl pl-6 pt-4'>Modules</div>
					<div className='border h-screen pt-4'>
						{
							data.map((item) => <SingleModule key={item.id} item={item} />)
						}

					</div>
				</div>
				<div className='border w-2/3'>
					<ReactFl data={data} />
					{/* <RFlow /> */}
				</div>
			</div>
		</>

	)
}

export default flowlist

export async function getServerSideProps({ query }) {

	const module = await fetch('https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=1&limit=5');
	const data = await module.json();

	// console.log(query.flowlist)

	const list = await fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/workflow/${query.flowlist}`);
	const listData = await list.json();

	// console.log(data)

	return {
		props: {
			data,
			listData
		},
	};
}