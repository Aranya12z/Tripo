import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomNode from "./CustomNode";
import { saveTripFlow } from "../../api/trip.api";

const nodeTypes = { custom: CustomNode };

const TripCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const handleAddNode = () => {
    const newNode = {
      id: uuidv4(),
      type: "custom",
      position: { x: 200, y: 200 },
      data: { title: "New Stop", description: "", budget: 0 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleSave = async () => {
    await saveTripFlow("tripId-placeholder", { nodes, edges });
  };

  return (
    <div style={{ flex: 3 }}>
      <button onClick={handleAddNode}>Add Stop</button>
      <button onClick={handleSave}>Save</button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default TripCanvas;
