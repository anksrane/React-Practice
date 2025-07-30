import { FaFolder } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

function Folder({handeleInsertNode, explorer}){
    const [expand,setExpand] = useState(false);
    const [showInput,setShowInput]=useState({
        visible:false,
        isFolder:null
    })

    const handleNewFolderClick = (e,isFolder) => {
        e.stopPropagation();
        setShowInput({
            visible:true,
            isFolder
        })
        setExpand(true);
    }  
    
    const addNewFolder=(e)=>{
        if(e.keyCode==13 && e.target.value.trim()){
            handeleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({...showInput,visible:false})
            console.log(explorer);
        }
    }
    if(explorer.isFolder){
        return(
            <div className="ms-3">
                <div className="flex items-center justify-between gap-2 w-full cursor-pointer mb-[5px] bg-slate-200 p-1" onClick={()=>setExpand(!expand)}>
                    <div className="flex items-center gap-1">
                        <FaFolder className="text-amber-400" /> <p className="">{explorer.name}</p>
                    </div>

                    <div className="flex gap-1">
                        <button className="border border-black flex items-center p-1 text-sm rounded-sm bg-white"
                            onClick={(e)=>handleNewFolderClick(e,true)}
                        ><IoMdAdd /> Add Folder</button>
                        <button className="border border-black flex items-center p-1 text-sm rounded-sm bg-white"
                            onClick={(e)=>handleNewFolderClick(e,false)}
                        ><IoMdAdd /> Add File</button>
                    </div>
                </div>
                <div className={`w-full ${expand ? 'block':'hidden'}`}>
                    {showInput.visible && (
                        <div className="flex items-center gap-2 w-full mb-[5px] ms-1">
                            {showInput.isFolder? <FaFolder className="text-amber-400" /> : <CiFileOn className="text-amber-400" /> }
                            <input type="text" 
                            className="border p-1 text-sm rounded-sm" 
                            placeholder=""
                            autoFocus
                            onBlur={()=>setShowInput({...showInput,visible:false})}
                            onKeyDown={(e)=>addNewFolder(e)}
                            />
                        </div>
                    )}
                    {explorer.items.map((exp)=>{
                        return (
                            <Folder handeleInsertNode={handeleInsertNode} key={exp.id} explorer={exp} />
                        )
                    })}
                </div>
            </div>
        ) 
    }else{
        return (
            <div className="flex items-center w-full ms-3 mb-[5px] bg-slate-100"><CiFileOn /> {explorer.name}</div>
        )
    }
}
export default Folder;