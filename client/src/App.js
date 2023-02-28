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
  }, [folderData, setFolderData]);

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
  const handleDeleteFolder = (folderId, parentId) => {
    // console.log(folderId, parentId);
    axios
      .delete(
        `http://localhost:8000/deleteFolder?folderId=${folderId}&parentFolderId=${parentId}`
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
      <h2 className='title'>Ostad Folder Explorer</h2>
      <Folder
        explorer={folderData}
        handleAddFolder={handleAddFolder}
        handleDeleteFolder={handleDeleteFolder}
      />

      <div class='sub_div'>
        <p>
          {" "}
          © Khalid Ibn Alam Utsob{" "}
          <span>
            <a href='mailto:en.arnob@gmail.com'>en.arnob@gmail.com</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default App;
