import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

import TextInputNode from "./TextInputNode";
import ResultNode from "./ResultNode";
import { askAI } from "../api/api"; 

const nodeTypes = {
  textInput: TextInputNode,
  result: ResultNode,
};

const initialNodes = [
  {
    id: "1",
    type: "textInput",
    position: { x: 100, y: 200 },
    data: {},
  },
  {
    id: "2",
    type: "result",
    position: { x: 450, y: 200 },
    data: { response: "Response will appear here..." },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
];

const FlowCanvas = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const runFlow = async () => {
    try {
      setLoading(true);

      // ✅ call deployed API
      const response = await askAI(prompt);

      const updatedNodes = nodes.map((node) => {
        if (node.id === "2") {
          return {
            ...node,
            data: {
              ...node.data,
              response: response,
            },
          };
        }
        return node;
      });

      setNodes(updatedNodes);

    } catch (error) {
      console.error(error);
      alert("Error getting AI response");
    } finally {
      setLoading(false);
    }
  };

  const updatedNodes = nodes.map((node) => {
    if (node.id === "1") {
      return {
        ...node,
        data: {
          ...node.data,
          prompt,
          onPromptChange: setPrompt,
        },
      };
    }
    return node;
  });

  return (
    <div style={{ width: "100%", height: "90vh" }}>

      {/* Loader */}
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px 40px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <div className="spinner"></div>
            <p
              style={{
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              🧠 AI is analyzing your prompt...
            </p>
          </div>
        </div>
      )}

      {/* Run Button */}
      <button
        onClick={runFlow}
        disabled={loading}
        style={{
          position: "absolute",
          zIndex: 10,
          top: 10,
          right: 20,
          padding: "10px 20px",
          background: "#6366f1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {loading ? "Running..." : "Run Flow"}
      </button>

      <ReactFlow
        nodes={updatedNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

    </div>
  );
};

export default FlowCanvas;