var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', function(req, res, next) {
    async function fetchJsonObject (){
        try {
            let result = await fetch('http://jsonplaceholder.typicode.com/users/');
            return result;
        }
        catch (error) {
            console.log(errer.message)
        }
    }

    fetchJsonObject()
        .then(obj => obj.json())
        .then((obj) => res.render('users', {users:obj,title:"Users Table"}))
        .catch((error) => error)
});

module.exports = router;