const router = require("express").Router();

const {addFolderController, getFoldersController} = require("../controllers/folderController")



router.post("/addFolder", addFolderController);
router.get("/getFolders", getFoldersController);


module.exports = router;