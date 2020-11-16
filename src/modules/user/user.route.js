
const router= require("express").Router();
const {
    viewAllProduct,
    viewOneProduct,
    viewAllCategory,
    viewOneCategory,
    CreateOrder
} = require('./user.controller');

/* create a merchant path: /api/user/viewAllProduct*/
router.get("/viewAllProduct",viewAllProduct);
/* create a merchant path: /api/user/viewOneProduct*/
router.get("/viewOneProduct",viewOneProduct);
/* create a merchant path: /api/user/viewAllCategory*/
router.get("/viewAllCategory",viewAllCategory);
/* create a merchant path: /api/user/viewOneCategory*/
router.get("/viewOneCategory",viewOneProduct);
/* create a merchant path: /api/user/CreateOrder*/
router.get("/createOrder",CreateOrder);





/**
 * expoort
 */
module.exports=router;
