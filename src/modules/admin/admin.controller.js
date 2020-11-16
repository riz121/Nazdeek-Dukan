const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Admin, Merchant, User, Store } = require("../../models");

/**
 * Create Merchant
 * @param {Request} req request object
 * @param {Response} res response object
 * @param {Function} next next middleware
 */

const createMerchant = async (req, res, next) => {
  try {
    const { email, phone } = req.body;
    // check if this merchant already exist

    const isAlreadyExists = await Merchant.exists({
      $or: [{ email }, { phone }],
    });
    if (isAlreadyExists) {
      return res.status(400).json({
        message: "A merchant with this email/phone already exists",
      });
    }

    // hash merchant password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    // construct payload and save
    const merchant = await new Merchant({
      ...req.body,
      password,
    }).save();

    const payload = {
      role: "merchant",
      profile: {
        _id: merchant._id,
      },
    };

    const jwtOpts = { expiresIn: 3600 };

    // generate jwt
    jwt.sign(payload, "randomString", jwtOpts, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token, profile: merchant });
    });
    //   res.json(merchant);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * update Merchant
 * @param {Request} req request object
 * @param {Response} res response object
 * @param {function } next response object 
 */

const updateMerchant = async (req, res, next) => {
  try {
    const { merchantId } = req.body;
    if (!merchantId) {
      res.status(404).send({
        message: "Merchant id is invalid"
      });
    }
    const data = await Merchant.findByIdAndUpdate(merchantId, req.body, {
      new: true,
    });
    if (!data) {
        res.status(404).send({
            message: "no such Merchant exist"
          });
    }
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while updating the Merchant.",

    });
  }
};

/**
 * Delete Merchant
 * @param {Request} req request object
 * @param {Response} res response object
 * @param {Function} next next middleware
 */
const deleteMerchant = (req, res) => {
  const {merchantId }= req.body

  Merchant.findByIdAndRemove(merchantId)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Merchant with id=${merchantId}. Maybe Merchant was not found!`,
        });
      } else {
        res.send({
          message: "Merchant was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Merchant with id=" +merchantId,
      });
    });
};


/**
 * Create Store
 * @param {Request} req request object
 * @param {Response} res response object
 * @param {Function} next next middleware
 */

const createStore = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({
      message: "store content can not be empty",
    });
  }
  // Create a Store
  // construct payload and save
  const store = await new Store({
    ...req.body,
  });

  // Save Note in the database
  store
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the store.",
      });
    });
};

/**
 * Edit store
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const updateStore = async (req, res, next) => {
  try {
    const { storeId } = req.body;
    if (!storeId) {
      res.status(404).send({
        message: "store id is invalid"
      });
    }
    const data = await Store.findByIdAndUpdate(storeId, req.body, {
      new: true,
    });
    if (!data) {
        res.status(404).send({
            message: "no such store exist"
          });
    }
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while updating the store.",

    });
  }
};

/**
 * Delete Store
 * @param {Request} req request object
 * @param {Response} res response object
 * @param {Function} next next middleware
 */

const deleteStore = (req, res) => {
  const {storeId }= req.body

  Store.findByIdAndRemove(storeId)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Store with id=${storeId}. Maybe Store was not found!`,
        });
      } else {
        res.send({
          message: "Store was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Store with id=" +storeId,
      });
    });
};

/**
 * View All Merchant
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const findAllMerchant = (req, res,next) => {
  Merchant.find()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving Merchant."
      });
  });
};

/**
 * View All Store
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const findAllStore = (req, res,next) => {
  Store.find()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving Store."
      });
  });
};

/**
 * export
 */
module.exports = {
  createStore,
  createMerchant,
  updateStore,
  deleteStore,
  updateMerchant,
  deleteMerchant,
  findAllMerchant,
  findAllStore
  
};
