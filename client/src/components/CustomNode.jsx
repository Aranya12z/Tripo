import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {
  return (
    <div style={{
      padding: 10,
      border: "1px solid #333",
      borderRadius: 8,
      background: "#1e1e1e",
      color: "white",
      minWidth: 150
    }}>
      <strong>{data.title}</strong>
      <div style={{ fontSize: 12 }}>
        Budget: ₹{data.budget || 0}
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
