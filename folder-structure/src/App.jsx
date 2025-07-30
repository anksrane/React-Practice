import { useState } from 'react'
import './App.css'
import {explorer} from "./data/folderData";
import Folder  from "./components/Folder";
import useTravesetree from "./hooks/traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const {insertNode} = useTravesetree();

  const handeleInsertNode = (folderId, item, isFolder) => {
    const finalTree= insertNode(explorerData, folderId, item, isFolder);
    console.log(finalTree);
    setExplorerData(finalTree);
  }

  return (
    <>
      <div className='p-3 w-full max-w-sm'>
        <Folder handeleInsertNode={handeleInsertNode} explorer={explorerData}/>
      </div>
    </>
  )
}

export default App
