const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Admin, User, Merchant } = require("../../models");
const {
  APIError,
  Mappings: {
    Error: { Auth: AuthErrors },
  },
} = require("../../libraries");

/**
 * Login controller for all user types
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const login = async (req, res, next) => {
  try {
    const { role, email, password } = req.body;
    let userModel;

    // which role to login
    switch (role) {
      case "admin":
        userModel = Admin;
        break;
      case "merchant":
        userModel = Merchant;
        break;
      case "user":
        userModel = User;
        break;
      default:
        return res.status(400).send({ message: "Invalid role provided" });
    }

    // check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      // return res.status(401).json({ message: 'no such user exists' });
      throw APIError.createFromObject(AuthErrors.ACCOUNT_NOT_FOUND);
    }

    // check for password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({
        message: "Incorrect Password !",
      });

    // generate payload for jwt
    const payload = {
      role,
      profile: {
        _id: user._id,
      },
    };

    const jwtOpts = { expiresIn: 3600 };
    //     const safeModel = {
    //     _id: user._id,
    //     name: user.name,
    //     email: user.email,
    //     phone: user.phone,
    //     address: user.address,
    // };

    // generate jwt
    jwt.sign(payload, "randomString", jwtOpts, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token, profile: user });
    });
  } catch (error) {
    if (!(error instanceof APIError)) {
      error = APIError.createFromObject({});
    }
    return res.status(error.statusCode).send({
      message: error.message,
      key: error.errorKey,
    });
  }
};

/**
 * Signup for User
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const Usersignup = async (req, res, next) => {
  try {
    const { email, phone } = req.body;
    // check if this user exists
    const isUserExists = await User.exists({
      $or: [{ email }, { phone }],
    });
    if (isUserExists) {
      return res.status(400).json({
        message: "user with this email or phone already exists",
      });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    // construct payload and save
    const user = await new User({
      ...req.body,
      password,
    }).save();

    // generate jwt for this user
    // generate payload for jwt
    const payload = {
      role: "user",
      profile: {
        _id: user._id,
      },
    };

    const jwtOpts = { expiresIn: 3600 };

    // generate jwt
    jwt.sign(payload, "randomString", jwtOpts, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token, profile: user });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * Signup for Admin
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const Adminsignup = async (req, res, next) => {
  try {
    const { email, phone } = req.body;
    // check if this user exists
    const isAdminExists = await Admin.exists({
      $or: [{ email }, { phone }],
    });
    if (isAdminExists) {
      return res.status(400).json({
        message: "Admin with this email or phone already exists",
      });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    // construct payload and save
    const admin = await new Admin({
      ...req.body,
      password,
    }).save();

    // generate jwt for this user
    // generate payload for jwt
    const payload = {
      role: "admin",
      profile: {
        _id: admin._id,
      },
    };

    const jwtOpts = { expiresIn: 3600 };

    // generate jwt
    jwt.sign(payload, "randomString", jwtOpts, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token, profile: admin });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * Get Profile Controller for all user roles
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const getProfile = async (req, res, next) => {
  try {
    const { _id } = req.profile;
    let userModel;

    // check which role is accessing api
    switch (req.role) {
      case "user":
        userModel = User;
        break;
      case "admin":
        userModel = Admin;
        break;
      case "merchant":
        userModel = Merchant;
        break;
      default:
      // will never arise
    }

    const profile = await userModel.findOne({ _id });
    res.json(profile);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * Export
 */
module.exports = {
  login,
  Usersignup,
  getProfile,
  Adminsignup
};
