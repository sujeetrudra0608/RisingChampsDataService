const express = require('express');
let router = express.Router();

const userUtils = require('../controllers/user')

router.post('/', userUtils.get)
router.post('/logins', userUtils.logins)
router.post('/register', userUtils.register)

module.exports = router;