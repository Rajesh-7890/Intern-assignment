const express = require('express');
const controllers = require('../controllers/userControllers');
const router = express.Router();

router.get('/', controllers.getUser);
router.post('/register', controllers.registerUser);
router.post('/login', controllers.loginUser);

module.exports = router;
