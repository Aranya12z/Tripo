import { useState } from "react";

const NodeModal = ({ node, onSave, onClose }) => {
  const [form, setForm] = useState(node.data);

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <div>
      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="number"
        value={form.budget}
        onChange={(e) => setForm({ ...form, budget: e.target.value })}
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default NodeModal;
