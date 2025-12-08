import { ArrowRight, DockIcon, File, Minus, Plus, Trash2Icon } from "lucide-react";
import React, { useState } from "react";

const TreeNode = ({ node, onAdd , onAddFile}) => {
  const [open, setOpen] = useState(false);

  

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="ml-4">
      <div
        className="cursor-pointer flex items-center space-x-2"
         
      >
        
        {node.isFolder && (
          <span className={`${open ? "rotate-90" : ""} transition-transform`} onClick={() => setOpen(!open)}>
            {
              node.isFolder ? <ArrowRight size={10}/> : ""
            }
          </span>
        )}

       
        <span>{node.name}</span>
        {
          node.isFolder && (
            <>
                <span onClick={() => onAdd(node.id)}><Plus size={16}/></span>
                <span onClick={() => onAddFile(node.id)}><File size={16}/></span>
            </>
          )
        }
        <span><Trash2Icon size={16}/></span>
      </div>

      
      {open && hasChildren && (
        <div className="ml-4">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} onAdd={onAdd} onAddFile={onAddFile}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;