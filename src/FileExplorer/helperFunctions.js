const insertFolder = (tree, folderId, name, isFolder) => {
  if (tree.id == folderId && tree.isFolder) {
    tree.items.unshift({
      id: Math.random().toString(),
      name: name,
      isFolder: isFolder,
      items: [],
    });
    return tree;
  }

  let latestNode = [];
  latestNode = tree.items.map((branch) => {
    return insertFolder(branch, folderId, name, isFolder);
  });

  return { ...tree, items: latestNode };
};

var index = -1;
const deleteFolder = (tree, folderId) => {
  function getNode(item, i) {
    if (item.id == folderId) {
      index = i;
      return true;
    }
  }
  if (tree.items && tree.items.some(getNode)) {
    console.log(folderId, index);
    tree.items.splice(index, 1);
    index = -1;
  } else {
    tree.items.map((branch) => {
      return deleteFolder(branch, folderId);
    });
  }
  return { ...tree };
};
export { insertFolder, deleteFolder };
