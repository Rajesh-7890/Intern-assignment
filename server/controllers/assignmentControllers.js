const Assignment = require('../db/models/assignmentSchema');

module.exports.getAssignment = async (req, res) => {
  const response = await Assignment.find()
    .populate('userId', 'firstname')
    .populate('adminId', 'firstname');
  res.status(201).json(response);
};

module.exports.submitAssignment = async (req, res) => {
  try {
    const response = await Assignment.create({
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      adminId: req.body.adminId,
      date: req.body.date,
    });

    res
      .status(200)
      .json({ message: 'Assignment submit successfully', data: response });
  } catch (error) {
    res.status(500).json({ message: 'Error booking slot:', e: error.message });
  }
};

module.exports.acceptAssignment = async (req, res) => {
  try {
    const assignmentId = req.params.id;

    const updatedAssignment = await Assignment.findByIdAndUpdate(
      assignmentId,
      { status: 'accepted' },
      { new: true }
    );

    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    res.status(200).json({
      message: 'Assignment accepted successfully',
      assignment: updatedAssignment,
    });
  } catch (error) {
    console.error('Error accepting assignment:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports.rejectAssignment = async (req, res) => {
  try {
    const assignmentId = req.params.id;

    const updatedAssignment = await Assignment.findByIdAndUpdate(
      assignmentId,
      { status: 'rejected' },
      { new: true }
    );

    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    res.status(200).json({
      message: 'Assignment rejected successfully',
      assignment: updatedAssignment,
    });
  } catch (error) {
    console.error('Error rejecting assignment:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
