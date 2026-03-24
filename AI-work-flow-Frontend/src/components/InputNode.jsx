import React from "react";

const InputNode = ({ data }) => {
  return (
    <div style={{ padding: 10, background: "#fff", border: "1px solid #ddd" }}>
      <textarea
        placeholder="Type your prompt..."
        style={{ width: "200px", height: "80px" }}
        onChange={(e) => data.onChange(e.target.value)}
      />
    </div>
  );
};

export default InputNode;