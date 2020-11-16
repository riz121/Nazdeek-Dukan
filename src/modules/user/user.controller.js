const {Product,Category,Order}= require("../../models");

/**
 * product for all user
 * All product Show
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const viewAllCategory = (req, res,next) => {
    Category.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Category."
        });
    });
  };
 
/**
 * product for all user
 * All product Show
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const viewAllProduct = (req, res,next) => {
    Product.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Product."
        });
    });
  };
  /**
 * product for all user
 * one product Show
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */

const viewOneProduct = (req, res) => {
    const {productId}=req.body;
    Product.findById(productId)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "produt not found with id " + productId
            });            
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + productId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving product with id " + productId
        });
    });
};

/**
 * Order for all user
 * All product Show
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next middleware
 */
const CreateOrder = async (req, res,next) => {
    if (!req.body) {
        return res.status(400).send({
          message: "order Field can not be empty",
        });
      }
      // Create a order
      // construct payload and save
      const order = await new Order({
        ...req.body,
      });
    
      // Save Note in the database
        order.save()
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while creating the order.",
          });
        });
  };

/**
 * export
 */
module.exports={
    viewAllProduct,
    viewOneProduct,
    viewAllCategory,
    CreateOrder
};