import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const TreeNode = ({ node }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = node.nodes && node.nodes.length > 0;

  return (
    <div className="ml-4">
      <div
        className="cursor-pointer flex items-center space-x-2"
        onClick={() => setOpen(!open)}
      >
        
        {hasChildren && (
          <span className={`${open ? "rotate-90" : ""} transition-transform`}>
            <ArrowRight size={10}/>
          </span>
        )}

       
        <span>{node.name}</span>
      </div>

      
      {open && hasChildren && (
        <div className="ml-4">
          {node.nodes.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
