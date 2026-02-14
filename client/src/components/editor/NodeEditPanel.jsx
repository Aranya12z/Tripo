import { useState, useEffect } from "react";

export default function NodeEditPanel({ node, updateNode }) {
  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    if (node) {
      setTitle(node.data.title);
      setBudget(node.data.budget);
    }
  }, [node]);

  if (!node) return null;

  const handleSave = () => {
    updateNode(node.id, { title, budget });
  };

  return (
    <div style={{
      position: "absolute",
      right: 0,
      top: 0,
      width: 300,
      height: "100vh",
      background: "#111",
      color: "white",
      padding: 20
    }}>
      <h3>Edit Node</h3>

      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Budget</label>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
