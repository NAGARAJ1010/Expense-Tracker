const express = require("express");
const {
  addTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");
const authToken = require("../middlewares/authToken");
const router = express.Router();

router.route("/addTransaction").post(authToken, addTransaction);
router.route("/getTransaction").get(authToken, getTransaction);
router.route("/getTransaction/:id").get(authToken, getTransaction);
router.route("/updateTransaction/:id").put(authToken, updateTransaction);
router.route("/deleteTransaction/:id").delete(authToken, deleteTransaction);

module.exports = router;
