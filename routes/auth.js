const express = require('express');
const { register, login, logout, unregister } = require('../controllers/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/uregister', unregister);

module.exports = router;
