import React, { useState } from "react";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";

const Folder = ({ explorer, handleAddFolder }) => {
  //   console.log(explorer);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleNewFolder = (event) => {
    event.stopPropagation();
    setExpand(true);
    setShowInput(!showInput);
  };

  const onAddFolder = (event) => {
    if (event.keyCode === 13 && event.target.value) {
      handleAddFolder(explorer._id, event.target.value);
      setShowInput(false);
    }
  };

  return (
    <div style={{ marginTop: 5, marginLeft: 15 }}>
      <div className='folder' onClick={() => setExpand(!expand)}>
        <span>
          <FcFolder />
          {explorer.name}
        </span>
        <div>
          <button onClick={(e) => handleNewFolder(e)}>Add Folder</button>
          <button>Delete</button>
        </div>
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput && (
          <div className='inputContainer'>
            <span>
              <FcOpenedFolder />
            </span>
            <input
              type='text'
              onKeyDown={onAddFolder}
              className='inputContainer__input'
              onBlur={() => setShowInput(false)}
              autoFocus
            />
          </div>
        )}
        {explorer.subFolders &&
          explorer.subFolders.map((exp) => {
            return (
              <Folder
                explorer={exp}
                handleAddFolder={handleAddFolder}
                key={exp._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Folder;
