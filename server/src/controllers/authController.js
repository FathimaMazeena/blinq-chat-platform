const authService = require("../services/authService");

const register = async (req, res, next) => {

    try {
    const result = await authService.registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }


};


const login = async (req, res, next) => {

    try {
    const result = await authService.loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }



};

const logout = async (req, res) => {


  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });


}

const getMe = async (req, res) => {

  if (!req.user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json(req.user);
};

module.exports = {
  register,
  login,
  logout,
  getMe,
};