const useTravesetree = () =>{
    function insertNode(tree, folderId, itemName, isFolder){
        if (tree.id === folderId && tree.isFolder) {
            const newNode = {
                id: new Date().getTime().toString(),
                name: itemName,
                isFolder,
                items: []
            };

            if (isFolder) {
                tree.items.unshift(newNode);
            } else {
                tree.items.push(newNode);
            }

            return tree;
        }

        let latestNode= tree.items.map((obj)=>{
            return insertNode(obj, folderId, itemName, isFolder);
        });
        return {...tree,items:latestNode};
    }
    return {insertNode}
}

export default useTravesetree;