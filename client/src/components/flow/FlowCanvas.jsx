import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode
};

const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 100, y: 100 },
    data: { title: "Start", budget: 1000 }
  },
  {
    id: "2",
    type: "custom",
    position: { x: 400, y: 100 },
    data: { title: "Beach", budget: 2000 }
  }
];

export default function FlowCanvas({ selectedNode, setSelectedNode }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = (_, node) => {
    setSelectedNode(node);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
