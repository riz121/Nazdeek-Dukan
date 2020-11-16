
const router= require("express").Router();
const {
    addCategory,
    updateCategory,
    deleteCategory,
    addProduct,
    updateProduct,
    deleteProduct,
    viewAllOrders,
    deleteOrder
} = require('./merchant.controller');

/* create a merchant path: /api/merchant/addCategory*/
router.post("/addCategory",addCategory);
/* create a merchant path: /api/merchant/updateCategory*/
router.post("/updateCategory",updateCategory);
/* create a merchant path: /api/merchant/deleteCategory*/
router.post("/deleteCategory",deleteCategory);
/* create a merchant path: /api/merchant/addCategory*/
router.post("/addProduct",addProduct);
/* create a merchant path: /api/merchant/updateProduct*/
router.post("/updateProduct",updateProduct);
/* create a merchant path: /api/merchant/deleteCategory*/
router.post("/deleteProduct",deleteProduct);
/* create a merchant path: /api/merchant/viewAllOrders*/
router.post("/viewAllOrders",viewAllOrders);
/* create a merchant path: /api/merchant/deleteOrder*/
router.post("/deleteOrder",deleteOrder);


/**
 * expoort
 */
module.exports=router;
