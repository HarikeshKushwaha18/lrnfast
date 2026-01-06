import React, { useState } from 'react';
import { Moon, Sun, User, Sparkles, HelpCircle, MessageSquare, Keyboard, LogOut } from 'lucide-react';

const UserMenu = ({ isOpen, onClose }) => {
  const [darkMode, setDarkMode] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className="absolute right-4 top-12 bg-white border border-gray-200 rounded shadow-lg z-50 min-w-[200px]">
        <div className="py-1">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between"
          >
            <span>Dark mode</span>
            <div className={`w-10 h-5 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-gray-300'} relative transition-colors`}>
              <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? 'translate-x-5' : ''}`} />
            </div>
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
            <User size={16} />
            Profile
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
            <Sparkles size={16} />
            <span>What's new</span>
            <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
            <HelpCircle size={16} />
            Help
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
            <MessageSquare size={16} />
            Send feedback
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
            <Keyboard size={16} />
            Hints and shortcuts
          </button>
          <div className="border-t my-1" />
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 text-red-600">
            <LogOut size={16} />
            Log out
          </button>
        </div>
      </div>
    </>
  );
};

export default UserMenu;

