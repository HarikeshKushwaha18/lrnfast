import { Bell, Menu, Search, UserPlus } from "lucide-react";
import React, { useState } from "react";
import UserMenu from "../components/UserMenu";

const Header = ({ onMenuClick, activeNode, breadcrumbPath = [], onAddItemMember }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('dfin');

  const getBreadcrumbs = () => {
    if (breadcrumbPath.length > 0) {
      return breadcrumbPath.map(node => node.name).join(' / ');
    }
    return '';
  };

  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-4 z-30">
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded"
          title="Menu"
        >
          <Menu size={20} />
        </button>
        
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded flex-1 max-w-md">
          <Search size={16} className="text-gray-500" />
          <input
            className="border-none bg-transparent outline-none w-full text-sm"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
          />
        </div>

        {activeNode && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{getBreadcrumbs()}</span>
            {activeNode.type === 'container' && (
              <button
                onClick={onAddItemMember}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                Add item member
              </button>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
          <UserPlus size={14} />
          INVITE TEAM MEMBER
        </button>
        
        <button className="p-2 hover:bg-gray-100 rounded">
          <Bell size={20} />
        </button>
        
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold text-sm relative"
          >
            FL
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              NEW
            </span>
          </button>
          <UserMenu isOpen={showUserMenu} onClose={() => setShowUserMenu(false)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
