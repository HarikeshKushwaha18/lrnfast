import { Bell, HamburgerIcon, List, SearchIcon, UserPlus } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between m-4">
      <div className="flex items-center gap-1 max-w-96">
        <div className="cursor-pointer">
          <List size={18} />
        </div>
        <div className="flex items-center gap-2  px-2 py-1  flex-1 bg-gray-200">
          <SearchIcon size={16} />
          <input
            className="border-none bg-transparent outline-none w-full text-sm  "
            type="text"
            placeholder="dfin"
          />
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-1 items-center border p-0.5 bg-gray-100 cursor-pointer">
            <UserPlus size={14}/>
            INVITE TEAM MEMBER
      </div>
      <div className="cursor-pointer">
        <Bell size={18}/>
      </div>
      <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-xl font-semibold p-2 cursor-pointer">AR</div>
      </div>
    </div>
  );
};

export default Header;
