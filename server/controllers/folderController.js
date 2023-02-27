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
                const updatedParentFolder = await Folder.findOneAndUpdate({ _id: parentId }, { $push: { subFolders: newFolder._id } })
                newFolder.save()
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