import React, { useState, useRef, useCallback, useMemo } from 'react';
import ReactFlow, {
	ReactFlowProvider,
	addEdge,
	useNodesState,
	useEdgesState,
	Controls,
	Background
} from 'reactflow';
import 'reactflow/dist/style.css';

import { SingleModule } from './SingleModule';
import Pagination from '@/components/Pagination';
import { CustomNode } from './CustomNode';
import { CustomModuleNode } from './CustomModuleNode';


const initialNodes = [
	{
		id: '1',
		type: 'userNode',
		data: { label: 'input node' },
		position: { x: 25, y: -300 },
	},
];

const initialEdges = [
	{ id: 'e1-2', source: '2', target: '1' }
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const ReactFl = (props) => {

	const { data } = props

	const reactFlowWrapper = useRef(null);
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [reactFlowInstance, setReactFlowInstance] = useState(null);

	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

	const onDragOver = useCallback((event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}, []);

	const onDrop = useCallback(
		(event) => {
			event.preventDefault();

			const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
			const type = event.dataTransfer.getData('application/reactflow');

			// check if the dropped element is valid
			if (typeof type === 'undefined' || !type) {
				return;
			}

			const position = reactFlowInstance.project({
				x: event.clientX - reactFlowBounds.left,
				y: event.clientY - reactFlowBounds.top,
			});
			const newNode = {
				id: getId(),
				type: 'moduleNode',
				position,
				data: { label: `${type} node` },
			};

			setNodes((nds) => nds.concat(newNode));
		},
		[reactFlowInstance]
	);

	const nodeTypes = useMemo(() => ({ userNode: CustomModuleNode, moduleNode: CustomNode }), []);

	return (
		<div className="flex h-screen flex-grow">
			<ReactFlowProvider>
				<div className='w-96 border flex justify-between flex-col'>
					<div className='border h-16 text-xl pl-6 pt-4'>Modules</div>
					<div className='h-screen pt-4'>
						{
							data.map((item) => <SingleModule key={item.id} item={item} />)
						}

					</div>
					<Pagination />
				</div>
				<div className="h-screen flex-grow" ref={reactFlowWrapper}>
					<ReactFlow
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						onInit={setReactFlowInstance}
						onDrop={onDrop}
						onDragOver={onDragOver}
						fitView
						nodeTypes={nodeTypes}
					>
						<Controls />
						<Background variant='dots' gap={8} size={1} />
					</ReactFlow>
				</div>
			</ReactFlowProvider>
		</div>
	);
};

export default ReactFl;


