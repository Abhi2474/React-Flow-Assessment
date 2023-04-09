import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import Check from './Check';
// import { CustomNode } from './CustomNode';
import { SingleModule } from './SingleModule';
// import Check from './Check';



export const ReactFl = (props) => {
	// const { data } = props

	// console.log(data[0])
	// const { name } = data[0]

	const initialNodes = [
		{ id: '1', type: 'input', position: { x: 200, y: 60 }, data: { label: 'name' } },
		{ id: '2', position: { x: 100, y: 220 }, data: { label: '2' } },
		{ id: '3', position: { x: 400, y: 250 }, data: { label: '3' } },
		{ id: '4', type: 'output', position: { x: 500, y: 320 }, data: { label: '4' } },
	];
	const initialEdges = [
		{ id: 'e1-2', source: '1', target: '2' },
		{ id: '2', source: '1', target: '3' },
		{ id: '3', source: '3', target: '4' }
	];

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

	// const nodeTypes = useMemo(() => ({ textUpdater: SingleModule }), []);
	// const nodeTypes = useMemo(() => ({ textUpdater: Check }), []);

	return (
		<div style={{ width: '66vw', height: '100vh' }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			// nodeTypes={nodeTypes}
			>
				<Controls />
				<MiniMap />
				<Background variant="dots" gap={12} size={1} />
			</ReactFlow>
		</div>
	);
}