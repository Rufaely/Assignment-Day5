const express = require('express');
const fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');
const router = express.Router();

const jsonData = fetch ('http://jsonplaceholder.typicode.com/users/');

const result = jsonData.then((obj) => {
    return obj.json()
}).catch((error) => error);

router.get('/', function (req, res, next) {
    Rx.Observable.fromPromise(result)
        .subscribe(obj => res.render('users', {users:obj,title:"Users Table"}));
});

module.exports = router;