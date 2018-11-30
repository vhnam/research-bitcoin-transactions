const bitcoin = require('bitcoinjs-lib');

function randomString() {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let index = 0; index < 32; index++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function rng() {
  return Buffer.from(randomString());
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
