import { MessagesSquareIcon, MoreVertical, Plus } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-52 ml-4 ">
      <div className="flex gap-3">
        <button className="cursor-pointer">All</button>
        <button className="cursor-pointer">Board</button>
        <button className="cursor-pointer">Graph</button>
        <button className="cursor-pointer">Recent</button>
        <button className="cursor-pointer">
          <MoreVertical size={16} />
        </button>
      </div>
      <div className="flex justify-between items-center mt-2">
            <h1 className="font-bold">DFIN</h1>
            <div className="flex gap-2"><Plus size={16} className="cursor-pointer"/> <MessagesSquareIcon size={16} className="cursor-pointer"/> </div>
      </div>
    </div>
  );
};

export default Sidebar;
