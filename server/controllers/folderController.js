const Folder = require("../models/Folder");

exports.addFolderController = async (req, res) => {
    return res.status(200).json({ msg: "Route Controller Working"});
}