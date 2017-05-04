// const lightwallet = require('eth-lightwallet') //browserify issue :(
const qr = require('qr-image')

module.exports = qr

if (typeof window !== "undefined") {
  window.qr = qr;
}
