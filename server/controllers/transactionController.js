const transactionModel = require("../models/transactionModel");

exports.addTransaction = async (req, res, next) => {
  try {
    const transaction = new transactionModel({
      ...req.body,
      user: req.userId,
    });

    await transaction.save();
    res.status(201).json({
      success: true,
      message: "Transaction data sent successfully...",
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getTransaction = async (req, res, next) => {
  const transactionId = req.params.id;
  try {
    if(transactionId){
      const transaction = await transactionModel.findOne({_id: transactionId});
      res.status(201).json({
        success: true,
        data: transaction
      });
    }
    else {
      const transactions = await transactionModel.find({ user: req.userId });
      res.status(201).json({
        success: true,
        data: transactions,
      });
    }
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "transactions not founded...",
    });
  }
};

exports.updateTransaction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const existingTransaction = await transactionModel.findOneAndUpdate(
      { _id: id, user: req.userId },
      req.body
    );
    if (!existingTransaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found or not authorized",
      });
    }

    res.status(200).json({
      success: true,
      data: existingTransaction,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
