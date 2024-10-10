const express = require('express');
const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');
const assignmetRoutes = require('./assignmentRoutes');
const router = express.Router();

router.use('/user', userRoutes);
router.use('/admin', adminRoutes);
router.use('/assignment', assignmetRoutes);

module.exports = router;
