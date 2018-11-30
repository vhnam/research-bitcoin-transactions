const transactionService = require('../../services/transaction');

module.exports = {
  sendTransaction: async (req, res) => {
    try {
      const transaction = ({ from, to, transactionHash, amount } = req.body);

      const txb = await transactionService.sendTransaction(transaction);
      res.status(200).json(txb);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};
