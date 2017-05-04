// const lightwallet = require('eth-lightwallet') //browserify issue :(
const Qr = require('qr-image')
const Web3 = require('web3')

// module.exports = {Qr

// if (typeof window !== "undefined") {
  window.Qr = Qr;
  // window.Web3 = Web3;
// }
