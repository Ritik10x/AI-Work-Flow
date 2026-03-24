import { Handle, Position } from "reactflow";

const ResultNode = ({ data }) => {
  return (
    <div className="bg-white border-2 border-green-500 rounded-xl p-4 w-64 shadow-md">

      <Handle type="target" position={Position.Left} />

      <p className="text-green-500 font-bold text-sm mb-2">
        🤖 AI Response
      </p>

      <div className="border border-gray-300 rounded-lg p-2 text-sm min-h-20 bg-gray-50 text-gray-700 max-h-40 overflow-y-auto">
        {data.response ? (
          <p>{data.response}</p>
        ) : (
          <p className="text-gray-400 italic">
            Response will appear here...
          </p>
        )}
      </div>

    </div>
  );
};

export default ResultNode;