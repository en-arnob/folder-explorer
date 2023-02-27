const router = require("express").Router();

const {addFolderController} = require("../controllers/folderController")



router.post("/addFolder", addFolderController);


module.exports = router;