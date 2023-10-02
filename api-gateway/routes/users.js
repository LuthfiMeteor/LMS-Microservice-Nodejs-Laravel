
const express = require('express');
const router = express.Router();

const UsersHandler = require('./handler/users');


router.post('/register', UsersHandler.register);

module.exports = router;

