const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");


const registerUser = async ({name, email, password, profilePicture}) => {


  if (!name || !email || !password) {

    throw new Error("Please fill all fields");
  }

  const existingUser = await User.findOne({ 
    email,
});

  if (existingUser) {
    throw new Error("User already exists");
  }


  const user = await User.create({
      name,
      email,
      password,
      profilePicture,
  });

  const token = generateToken(user._id);

  return {
  _id: user._id,
  name: user.name,
  email: user.email,
  profilePicture: user.profilePicture,
  token,
  };

}


const loginUser = async ({
  email,
  password,
}) => {

  const user = await User.findOne({
    email,
  });

  if (
    !user ||
    !(await bcrypt.compare(
      password,
      user.password
    ))
  ) {

    throw new Error(
      "Invalid credentials"
    );
  }

  // Generate token
  const token = generateToken(
    user._id
  );


  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    profilePicture:
      user.profilePicture,
    token,
  };
};


module.exports = {
  registerUser,
  loginUser,
};
  