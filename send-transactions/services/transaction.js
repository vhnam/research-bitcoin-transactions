const bitcoin = require('bitcoinjs-lib');

module.exports = {
  sendTransaction: async transaction => {
    const sender = bitcoin.ECPair.fromWIF(transaction.from);
    const txb = new bitcoin.TransactionBuilder();

    txb.setVersion(1);
    txb.addInput(transaction.transactionHash, 0);
    txb.addOutput(transaction.to, transaction.amount);
    txb.sign(0, sender);

    return txb.build().toHex();
  }
};
