import React, { useState, useEffect, useRef } from "react";
import { Bold, Italic, Save } from "lucide-react";

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

  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
    editorRef.current?.focus();
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
        <button
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          onClick={() => applyFormatting("bold")}
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          onClick={() => applyFormatting("italic")}
          title="Italic"
        >
          <Italic size={18} />
        </button>
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
        className="flex-1 border rounded p-4 overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{
          minHeight: "500px",
          maxHeight: "calc(100vh - 200px)",
        }}
      />
    </div>
  );
}

export default Editor;
