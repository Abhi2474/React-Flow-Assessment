import React, { useMemo, } from 'react'
import { CustomNode } from './CustomNode';

export const SingleModule = (props) => {

	const { item } = props

	const onDragStart = (event, nodeType) => {
		event.dataTransfer.setData('application/reactflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};

	const nodeTypes = useMemo(() => ({ listNode: CustomNode }), []);


	return (
		<>
			<div className=" flex justify-center items-center cursor-grab" onDragStart={(event) => onDragStart(event, 'listnode')} draggable>

				<div className=' border-2 border-green-200 w-4/5  mt-4 flex rounded-lg mx-auto'>
					<div className='text-center py-1 border-r-2 border-green-200 w-1/6 text-xl font-bold'>{item.input_type.toUpperCase()}</div>
					<div className='py-2 text-sm w-2/3 font-bold bg-green-50 px-2'>{item.name}</div>
					<div className='text-center py-1 border-l-2 border-green-200 w-1/6 text-xl font-bold'>{item.output_type.toUpperCase()}</div>
				</div>
			</div>
		</>
	)
}
