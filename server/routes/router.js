const router = require("express").Router();

const {addFolderController} = require("../controllers/folderController")



router.get("/addFolder", addFolderController);


module.exports = router;