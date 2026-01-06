import { ArrowRight, DockIcon, File, Minus, Plus, Trash2Icon } from "lucide-react";
import React, { useState } from "react";

const TreeNode = ({ node, onAdd , onAddFile, onDelete, onSelect, selectedNode}) => {
  const [open, setOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedNode && selectedNode.id === node.id;

  const handleNodeClick = (e) => {
    // Don't select if clicking directly on action buttons
    if (e.target.tagName === 'svg' || e.target.closest('span[class*="hover:bg-gray-200"]')) {
      return;
    }
    // Only select files, not folders
    if (!node.isFolder && onSelect) {
      onSelect(node);
    }
  };

  return (
    <div className="ml-4">
      <div
        className={`flex items-center space-x-2 py-1 px-2 rounded ${
          !node.isFolder ? "cursor-pointer hover:bg-gray-100" : ""
        } ${isSelected ? "bg-blue-100 border border-blue-300" : ""}`}
        onClick={handleNodeClick}
      >
        {node.isFolder && (
          <span 
            className={`${open ? "rotate-90" : ""} transition-transform cursor-pointer`} 
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
          >
            {
              node.isFolder ? <ArrowRight size={10}/> : ""
            }
          </span>
        )}

        {!node.isFolder && <File size={14} className="text-gray-500" />}
       
        <span className={isSelected ? "font-semibold" : ""}>{node.name}</span>
        {
          node.isFolder && (
            <>
                <span 
                  className="cursor-pointer hover:bg-gray-200 rounded p-1" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAdd(node.id);
                  }}
                >
                  <Plus size={16}/>
                </span>
                <span 
                  className="cursor-pointer hover:bg-gray-200 rounded p-1" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddFile(node.id);
                  }}
                >
                  <File size={16}/>
                </span>
            </>
          )
        }
        <span 
          className="cursor-pointer hover:bg-gray-200 rounded p-1" 
          onClick={(e) => {
            e.stopPropagation();
            onDelete(node.id);
          }}
        >
          <Trash2Icon size={16}/>
        </span>
      </div>

      
      {open && hasChildren && (
        <div className="ml-4">
          {node.children.map((child, index) => (
            <TreeNode 
              key={index} 
              node={child} 
              onAdd={onAdd} 
              onAddFile={onAddFile} 
              onDelete={onDelete}
              onSelect={onSelect}
              selectedNode={selectedNode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;