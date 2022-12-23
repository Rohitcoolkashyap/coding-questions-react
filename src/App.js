import "./App.css";
import Otp from "./components/otp";
import FileExplorer from "./FileExplorer";
import { data } from "./RecursiveCode/data";
import RecursiveComponent from "./RecursiveCode/RecursiveComponent";
import SearchFilter from "./searchFilter/SearchFilter";
import explorer from "./FileExplorer/folderData";
import { useState } from "react";
import { insertFolder, deleteFolder } from "./FileExplorer/helperFunctions";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const handleInsertNode = (folderId, name, isFolder) => {
    const finalTree = insertFolder(explorerData, folderId, name, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId) => {
    const finalTree = deleteFolder(explorerData, folderId);
    console.log(finalTree);
    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      {/* <UseReducer /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <Context /> */}
      {/* <Timer /> */}
      {/* <UseMemo /> */}
      {/* <Test1 />
      <Calculator /> */}
      {/* <Otp /> */}
      {/* <SearchFilter /> */}
      {/* <RecursiveComponent data={data} /> */}
      <FileExplorer
        explorer={explorerData}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
}

export default App;
