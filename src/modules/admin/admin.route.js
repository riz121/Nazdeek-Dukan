
const router=require("express").Router();
const {
    createMerchant,
    createStore,
    updateStore,
    deleteStore,
    updateMerchant,
    deleteMerchant,
    findAllMerchant,
    findAllStore
} = require('./admin.controller');

/* create a merchant path: /api/admin/createmMerchant*/
router.post('/createMerchant',createMerchant);
/* create a merchant path: /api/admin/updateMerchant*/
router.post('/updateMerchant',updateMerchant);
/* create a merchant path: /api/admin/deleteMerchant*/
router.post('/deleteMerchant',deleteMerchant);
/* create a merchant path: /api/admin/createStore*/
router.post('/createStore',createStore);
/* create a merchant path: /api/admin/editStore*/
router.post('/updateStore',updateStore);
/* create a merchant path: /api/admin/editStore*/
router.post('/deleteStore',deleteStore);
/* create a merchant path: /api/admin/findAllMerchant*/
router.get('/findAllMerchant',findAllMerchant);
/* create a merchant path: /api/admin/findAllStore*/
router.get('/findAllStore',findAllStore);

/**
 * expoort
 */
module.exports=router;
