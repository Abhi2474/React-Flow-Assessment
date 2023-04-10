import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { useRouter } from 'next/router'


export function CustomModuleNode() {
	const [items, setItems] = useState([]);

	const router = useRouter()
	const id = router.query.flowlist

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/workflow/${id}`);
			const data = await response.json();
			setItems(data);
		}
		fetchData();
	}, []);

	return (
		<>
			<div className=' border border-green-200 w-40 h-7 flex rounded mx-auto'>
				<div className='text-center border-r border-green-200 w-1/6 font-bold'></div>
				<div className=' text-sm text-center w-2/3 font-bold bg-green-50 px-2'>Input</div>
				<div className='text-center border-l border-green-200 w-1/6 font-bold'>{items.input_type?.toUpperCase()}</div>
			</div>
			<Handle type="source" position={Position.Bottom} id={items.id} />
		</>
	);
}