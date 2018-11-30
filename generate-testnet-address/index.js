const bitcoin = require('bitcoinjs-lib');

function rng() {
  return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
}

const testnet = bitcoin.networks.testnet;
const keyPair = bitcoin.ECPair.makeRandom({ network: testnet, rng: rng });
const publicKey = keyPair.publicKey;
const wif = keyPair.toWIF();
const { address } = bitcoin.payments.p2pkh({
  pubkey: publicKey,
  network: testnet
});

console.log(`Public key: ${publicKey.toString('hex')}`);
console.log(`Private key: ${wif}`);
console.log(`Address: ${address}`);
