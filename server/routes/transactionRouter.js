const express = require('express');
const { addTransaction, getTransaction, updateTransaction } = require('../controllers/transactionController');
const authToken = require('../middlewares/authToken');
const router = express.Router();

router.route('/addTransaction').post(authToken,addTransaction);
router.route('/getTransaction').get(authToken,getTransaction);
router.route('/getTransaction/:id').get(authToken,getTransaction);
router.route('/updateTransaction/:id').put(authToken,updateTransaction);

module.exports = router;