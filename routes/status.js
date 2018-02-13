var express = require("express");
var router  = express.Router();

//root route
router.get("/admin", (req, res) => {
    res.render("landing");
});










//router.post("/", (req, res) => {
//});




module.exports = router;