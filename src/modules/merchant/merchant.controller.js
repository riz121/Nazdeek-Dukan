const { Store, Product, Category,Order } = require("../../models");

/**
 * Add Category
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const addCategory = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({
      message: "store Field can not be empty",
    });
  }
  // Create a Category
  // construct payload and save
  const category = await new Category({
    ...req.body,
  });

  // Save Note in the database
    category.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the category.",
      });
    });
};


/**
 * Update Category
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const updateCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.body;
    if (!categoryId) {
      res.status(404).send({
        message: "category id is invalid"
      });
    }
    const data = await Category.findByIdAndUpdate(categoryId, req.body, {
      new: true,
    });
    if (!data) {
        res.status(404).send({
            message: "no such category exist"
          });
    }
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while updating the category.",

    });
  }
};
const deleteCategory = (req, res) => {
  const {categoryId }= req.body

  Category.findByIdAndRemove(categoryId)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Category with id=${categoryId}. Maybe Catogery was not found!`,
        });
      } else {
        res.send({
          message: "Catigery was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Catogerywith id=" +categoryId,
      });
    });
};



/**
 * Add Product
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const addProduct = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Product Field can not be empty",
    });
  }
  // Create a Category
  // construct payload and save
  const product = await new Product({
    ...req.body,
  });

  // Save Note in the database
    product.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the product.",
      });
    });
};


/**
 * Update Product
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const updateProduct = async (req, res, next) => {
  try {
    const {productId } = req.body;
    if (!productId) {
      res.status(404).send({
        message: "product id is invalid"
      });
    }
    const data = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (!data) {
        res.status(404).send({
            message: "no such product exist"
          });
    }
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while updating the product.",

    });
  }
};


/**
 * Delete Product
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */


const deleteProduct = (req, res) => {
  const {productId }= req.body

  Product.findByIdAndRemove(productId)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete product with id=${productId}. Maybe Product was not found!`,
        });
      } else {
        res.send({
          message: "Product was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product with id=" +productId,
      });
    });
};

/**
 *  Get All Order
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const viewAllOrders = (req, res,next) => {
  Order.find()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving Oder."
      });
  });
};

/**
 * Delete Order
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */


const deleteOrder = (req, res) => {
  const {orderId }= req.body

  Order.findByIdAndRemove(orderId)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete order with id=${orderId}. Maybe Product was not found!`,
        });
      } else {
        res.send({
          message: "Order was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Order with id=" +orderId,
      });
    });
};


/**
 * export
 */
module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  addProduct,
  updateProduct,
  deleteProduct,
  viewAllOrders,
  deleteOrder
};
