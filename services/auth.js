const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("models/user");
const JWT_SECRET = process.env.JWT_SECRET;
const Axios = require("axios");

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
  return jwt.sign({ id: user._id }, JWT_SECRET);
};

exports.checkAuth = (req, res, next) => {
  try {
    const userToken = req.headers.authorization;

    const userId = jwt.verify(userToken, JWT_SECRET).id;

    req.userId = userId;

    next();
  } catch (err) {
    res.status(401).json({ error: "Auth Failed" });
  }
};

exports.getTokenGoogle = async id_token => {
  const userInfo = await Axios.get(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`
  );

  const { name: name, email, sub: socialId, picture: photoUrl } = userInfo.data;

  const user = (await User.findOne({ provider: { google: socialId } })) || null;

  if (user === null) {
    const newUser = await User.create({
      name,
      nickname: name,
      email,
      provider: { google: socialId },
      photoUrl
    });

    return jwt.sign({ id: newUser._id }, JWT_SECRET);
  } else {
    return jwt.sign({ id: user._id }, JWT_SECRET);
  }
};

exports.checkAuth = (req, res, next) => {
  try {
    const userToken = req.headers.authorization;

    const userId = jwt.verify(userToken, JWT_SECRET).id;

    req.userId = userId;

    next();
  } catch (err) {
    res.status(401).json({ error: "Auth Failed" });
  }
};
