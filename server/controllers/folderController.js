const Folder = require("../models/Folder");

exports.addFolderController = async (req, res) => {
    
    const folderName = req.query.folderName
    const parentId = req.query.pid
    try {
        // console.log(parentId)
        if(parentId){
            const parentFolder = await Folder.findById(parentId)
            if(parentFolder){
                let newFolder = await new Folder({
                    name: folderName,
                    parentId: parentId
                })
                newFolder.save()
                const updatedParentFolder = await Folder.findOneAndUpdate({ _id: parentId }, { $push: { subFolders: newFolder._id } })
                return res.status(200).json({ msg: `New folder ${folderName} created successfully` });
            }
        } else {
            const newFolder = await Folder.create({
                name : folderName, 
            }) 
            return res.status(200).json({ msg: `New folder ${folderName} created successfully` });
        }
        
       
    } catch (error) {
        return res.status(500).json({ errors: error });
    }

}

exports.getFoldersController = async (req, res) => {
    const id = req.query.id
    try {
        let folders = await Folder.find().populate({ 
            path: 'subFolders',
            populate: {
              path: 'subFolders'
            } 
         })
        return res.status(200).json({folders} );
      } catch (error) {
        res.json(error);
      }
}

exports.deleteFolderController = async (req, res) => {
    const folderId = req.query.folderId
    const parentFolderId = req.query.parentFolderId

    try {
        const deletedFolder = await Folder.findByIdAndDelete(folderId);
        res.status(200).json({
            status: "success",
          });
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "failed to find or delete the folder",
          });
    }
}