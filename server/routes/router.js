const router = require("express").Router();

const {addFolderController, getFoldersController, deleteFolderController} = require("../controllers/folderController")



router.post("/addFolder", addFolderController);
router.get("/getFolders", getFoldersController);
router.route("/deleteFolder").delete(deleteFolderController)


module.exports = router;