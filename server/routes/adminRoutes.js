const express = require('express');
const controllers = require('../controllers/adminControllers');
const router = express.Router();

router.get('/', controllers.getAdmin);
router.post('/register', controllers.registerAdmin);
router.post('/login', controllers.loginAdmin);

module.exports = router;
