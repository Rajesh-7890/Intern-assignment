const User = require('../db/models/userSchema');
const bcrypt = require('bcrypt');

module.exports.getUser = async (req, res) => {
  const response = await User.find();
  res.status(201).json(response);
};

module.exports.registerUser = async (req, res) => {
  try {
    const admin = await User.findOne({ email: req.body.email });
    if (admin) {
      return res.status(403).json({ message: 'Email already taken' });
    }

    const hpassword = await bcrypt.hash(req.body.password, 10);

    const response = await User.create({
      ...req.body,
      password: hpassword,
    });
    return res
      .status(201)
      .json({ message: 'Register Suceesfully', value: response });
  } catch (err) {
    console.log('Signup error:', err);
    res
      .status(500)
      .json({ message: 'Server error during signup', error: err.message });
  }
};

module.exports.loginUser = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(201).json({ message: 'Email is INCORRECT' });
  }
  try {
    const isMatching = await bcrypt.compare(req.body.password, user.password);
    if (!isMatching) {
      return res.status(430).json({ message: 'password is DOESNT MATCH' });
    }
  } catch {
    console.log('error');
  }

  res.status(201).json({
    message: 'You are logged in',
    id: user._id,
  });
};
