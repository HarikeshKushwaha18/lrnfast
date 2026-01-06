import React, { useState, useEffect, useRef } from "react";
import { Save } from "lucide-react";

function Editor({ selectedNode, onSave }) {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");

  // Update content when selected node changes
  useEffect(() => {
    if (selectedNode && !selectedNode.isFolder) {
      setContent(selectedNode.content || "");
      // Set the editor content
      if (editorRef.current) {
        editorRef.current.innerHTML = selectedNode.content || "";
      }
    } else {
      setContent("");
      if (editorRef.current) {
        editorRef.current.innerHTML = "";
      }
    }
  }, [selectedNode]);

  const handleInput = (e) => {
    const html = e.target.innerHTML;
    setContent(html);
  };

  const handleSave = () => {
    if (selectedNode && !selectedNode.isFolder) {
      const htmlContent = editorRef.current?.innerHTML || "";
      onSave(selectedNode.id, htmlContent);
    }
  };

  if (!selectedNode || selectedNode.isFolder) {
    return (
      <div className="flex-1 flex items-center justify-center h-screen">
        <p className="text-gray-500">Select a document to edit</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col p-4">
      <div className="flex items-center gap-2 mb-4 border-b pb-3">
        <h2 className="text-lg font-semibold text-gray-800 mr-4">
          {selectedNode?.name || "Untitled"}
        </h2>
        <div className="flex-1"></div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-2"
          onClick={handleSave}
        >
          <Save size={16} />
          Save
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="flex-1 border rounded p-4 overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        style={{
          minHeight: "500px",
          maxHeight: "calc(100vh - 200px)",
        }}
        placeholder="Start typing..."
      />
    </div>
  );
}

export default Editor;
