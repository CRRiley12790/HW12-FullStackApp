//references to express and router
var express = require('express');
var router = express.Router();

//set up base route of /
router.get('/', function(req,res){
    res.render('index');
})

//exports routes - links js files
module.exports = router;