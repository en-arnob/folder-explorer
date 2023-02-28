import React, { useState, useEffect } from "react";
import axios from "axios";
import Folder from "./components/Folder";

const App = () => {
  const [folderData, setFolderData] = useState({});

  useEffect(() => {
    const getAllFolders = () => {
      axios
        .get(`http://localhost:8000/getFolders`)
        .then((response) => {
          const fetchedData = response.data.folders[0];
          // console.log(fetchedData);
          setFolderData(fetchedData);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getAllFolders();
  }, [setFolderData]);
  const handleAddFolder = (parentId, fName) => {
    // console.log(parentId, fName);
    axios
      .post(
        `http://localhost:8000/addFolder?folderName=${fName}&pid=${parentId}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Ostad Folder Explorer</h2>
      <Folder explorer={folderData} handleAddFolder={handleAddFolder} />
    </div>
  );
};

export default App;
