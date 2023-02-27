const { Schema, model } = require("mongoose");

const folderSchema = new Schema({
    name: {

        type: String,
        trim: true,
        maxlength: 50,
        required: true,
    },
    subFolders: [
        {
            type: Schema.Types.ObjectId,
            ref: this
          },
    ],
})


const Folder = model("Folder", folderSchema)
module.exports = Folder;