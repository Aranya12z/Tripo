import { useState } from "react";
import FlowCanvas from "../components/flow/FlowCanvas";
import NodeEditPanel from "../components/editor/NodeEditPanel";

export default function TripEditor() {
  const [selectedNode, setSelectedNode] = useState(null);

  const updateNode = (id, newData) => {
    setSelectedNode((prev) => ({
      ...prev,
      data: newData
    }));
  };

  return (
    <div style={{ position: "relative" }}>
      <FlowCanvas
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
      <NodeEditPanel
        node={selectedNode}
        updateNode={updateNode}
      />
    </div>
  );
}
