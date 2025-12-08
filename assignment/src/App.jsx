import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";
import TreeNode from "./components/TreeNode";
import UserMenu from "./components/UserMenu";

const App = () => {
  // const children = [
  //   {
  //     name: "Home",
  //     isFolder: true,
  //     content: null,
  //     children: [
  //       {
  //         name: "Movies",
  //         isFolder: true,
  //         content: null,
  //         children: [
  //           { name: "Bollywood", isFolder: true, content: null, children: [] },
  //           { name: "Hollywood", isFolder: true, content: null, children: [] },
  //           { name: "Tollywood", isFolder: true, content: null, children: [] },
  //         ],
  //       },
  //       {
  //         name: "Music",
  //         isFolder: true,
  //         content: null,
  //         children: [
  //           {
  //             name: "Retro",
  //             isFolder: true,
  //             content: null,
  //             children: [
  //               {
  //                 name: "Pal pal dil ke pas",
  //                 isFolder: false,
  //                 content: "",
  //               },
  //             ],
  //           },
  //           { name: "2000's", isFolder: true, content: null },
  //         ],
  //       },
  //       {
  //         name: "Documents",
  //         isFolder: true,
  //         content: null,
  //         children: []
  //       },
  //     ],
  //   },
  // ];

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 6);
  };

  const loadFromStorage = () => {
    const saved = localStorage.getItem("folderTree");
    return saved ? JSON.parse(saved) : [];
  };

  const [data, setData] = useState(loadFromStorage);

  const addNodeToTree = (tree, parentId, newNode) => {
    if (parentId === null && tree.length === 0) {
      return [newNode];
    }

    return tree.map((node) => {
      if (node.id === parentId) {
        return {
          ...node,
          children: [...(node.children || []), newNode],
        };
      }

      if (node.children) {
        return {
          ...node,
          children: addNodeToTree(node.children, parentId, newNode),
        };
      }

      return node;
    });
  };

  const handleAddFolder = (parentId) => {
    const newNode = {
      id: crypto.randomUUID(),
      name: "collection",
      isFolder: true,
      children: [],
    };

    setData((prevTree) => addNodeToTree(prevTree, parentId, newNode));
  };

  const handleAddFile = (parentId) => {
    if (parentId == null) {
      return;
    }
    const newNode = {
      id: generateId(),
      name: "leaf",
      isFolder: false,
      children: [],
    };

    setData((prevTree) => addNodeToTree(prevTree, parentId, newNode));
  };

  const deleteNodeFromTree = (tree, nodeId) => {
  return tree
    .filter(node => node.id !== nodeId) 
    .map(node => ({
      ...node,
      children: node.children
        ? deleteNodeFromTree(node.children, nodeId)
        : node.children
    }));
};


const handleDelete = (id) => {
  setData(prev => deleteNodeFromTree(prev, id));
};

  useEffect(() => {
    localStorage.setItem("folderTree", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Header />
      <Sidebar onAdd={handleAddFolder} />
      <div className="p-5">
        {data.map((node, index) => (
          <TreeNode
            key={index}
            node={node}
            onAdd={handleAddFolder}
            onAddFile={handleAddFile}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <UserMenu />
    </>
  );
};

export default App;
