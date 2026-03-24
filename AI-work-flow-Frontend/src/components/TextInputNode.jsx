import { Handle, Position } from "reactflow";

const TextInputNode = ({ data }) => {
  return (
    <div
      className="bg-white border-2 border-indigo-500 rounded-xl p-4 shadow-md"
      style={{ width: "250px" }}
    >
      <p className="text-indigo-500 font-bold text-sm mb-2">
        ✏️ Input Prompt
      </p>

      <textarea
        rows={4}
        placeholder="Type your prompt here..."
        value={data?.prompt || ""}
        onChange={(e) => data?.onPromptChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black bg-white"
        style={{ pointerEvents: "all" }}
      />

      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default TextInputNode;