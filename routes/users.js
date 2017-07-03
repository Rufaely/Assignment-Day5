var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(obj =>obj.json())
    .then(obj =>res.render('users', {users:obj,title:"Users Table"}));
    
});

module.exports = router;


