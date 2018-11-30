const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/v1/transaction');

const transactionValidator = require('../validators/transaction');

router.post(
  '/transactions',
  transactionValidator.sendTransaction,
  transactionController.sendTransaction
);

module.exports = router;
