const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("models/user");
const JWT_SECRET = process.env.JWT_SECRET;

exports.signup = async (req, res, next) => {
  const { name, nickname, email, password } = req.body;

  const pw = password;
  const saltRounds = 10;

  const hash = await bcrypt.hash(pw, saltRounds);

  await User.create({
    name: name,
    nickname: nickname,
    email: email,
    password: hash
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return "NO_EMAIL_PASSWORD";
  }

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return "INCORRECT_EMAIL_PASSWORD";
  }
  return generateToken(user);
};

const generateToken = user => {
  return jwt.sign({ id: user.email }, JWT_SECRET);
};
