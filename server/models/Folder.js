const { Schema, model } = require("mongoose");

const folderSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
    },
    canDelete: { type: Boolean, default: true },
    // parent: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'folderSchema',
    // },
    parentId: Schema.Types.ObjectId,
    subFolders: [
        {
            type: Schema.Types.ObjectId,
            ref: this
          },
    ],
})


const Folder = model("Folder", folderSchema)
module.exports = Folder;