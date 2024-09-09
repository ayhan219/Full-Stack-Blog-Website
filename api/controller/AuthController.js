const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Error happened while creating account" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username:user.username,
        createdAt:user.createdAt
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie('token', token, {
      httpOnly: true,  // JavaScript ile erişilemez
      secure: true,    // HTTPS üzerinden gönderilir
      maxAge: 3600000, // 1 saat
    });
  
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Error happened while creating account" });
    }
    const hashedPw = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPw,
    });
    await newUser.save();
    return res.status(200).json({ message: "Successfully created account" });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
const logoutUser =async(req,res)=>{
  res.clearCookie('token'); 
  res.status(200).json({ message: 'Successfully logged out' });
}

const getMe = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  
  res.json({ user: req.user });
  
};

const changePassword = async (req, res) => {
  const { id, password } = req.body;

  try {
    const hashPw = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate(id, {
      password: hashPw
    });

    if (!user) {
      return res.status(400).json({ message: "No user found" });
    }

    // Yeni token oluştur ve cookie'ye kaydet
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    });

    return res.status(200).json({ message: "Password successfully updated" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = {
  loginUser,
  signupUser,
  logoutUser,
  getMe,
  changePassword
};
