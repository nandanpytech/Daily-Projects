const useNode=()=>{
    const insertnode=(tree,commentId,item)=>{
        if(tree.id===commentId){
            tree.items.push({
                id:new Date().getTime,
                name:item,
                items:[]
            });
            return tree;
        }
        let latestNode = [];
        latestNode = tree.items.map((ob) => {
            return insertnode(ob, commentId, item);
        });

    return { ...tree, items: latestNode };

        
    }   

    return {insertnode}
}

export default useNode;
