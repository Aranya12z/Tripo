const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: 10, background: "#fff", borderRadius: 8 }}>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      <small>Budget: ₹{data.budget}</small>
    </div>
  );
};

export default CustomNode;
