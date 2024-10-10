const express = require('express');
const controllers = require('../controllers/assignmentControllers');
const router = express.Router();

router.get('/', controllers.getAssignment);
router.post('/submitassignment', controllers.submitAssignment);
router.post('/:id/accept', controllers.acceptAssignment);
router.post('/:id/reject', controllers.rejectAssignment);

module.exports = router;
