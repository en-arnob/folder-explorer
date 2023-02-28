import React, { useState, useEffect } from "react";
import axios from "axios";

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
  });

  return (
    <div>
      <h2>Ostad Folder Explorer</h2>
    </div>
  );
};

export default App;
