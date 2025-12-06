import React from 'react'
import Header from './Layout/Header'
import Sidebar  from './Layout/Sidebar'
import TreeNode from './components/TreeNode'

const App = () => {

  const nodes = [
  {
    name: "Home",
    nodes: [
      {
        name: "Movies",
        nodes: [
          { name: "Bollywood" },
          { name: "Hollywood" },
          { name: "Tollywood" }
        ]
      },
      {
        name: "Music",
        nodes: [
          { name: "Retro" },
          { name: "90's" }
        ]
      },
      { name: "Documents" }
    ]
  }
];

  return (
    <>
      <Header />
      <Sidebar />
      <div className="p-5">
      {nodes.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
    </>
  )
}

export default App