import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';


export function CustomNode() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/modules/1`);
			const data = await response.json();
			setItems(data);
		}
		fetchData();
	}, []);


	return (
		<>
			<Handle type="target" position={Position.Top} id={items.id} />
			<div className='text-xs border border-green-200 w-fit h-fit flex rounded mx-auto'>
				<div className='py-2 text-center border-r border-green-200 w-1/6 font-bold'>{items.input_type?.toUpperCase()}</div>
				<div className='w-2/3 font-bold bg-green-50 px-2'>{items.name}</div>
				<div className='py-2 text-center border-l border-green-200 w-1/6 font-bold'>{items.output_type?.toUpperCase()}</div>
			</div>
			<Handle type="source" position={Position.Bottom} id={items.id} />
		</>
	);
}