const crypto = require('crypto')

module.exports = (string) => {
  let encryptedString = crypto
  .createHash("md5")
  .update(string)
  .digest('hex')
  
  return encryptedString
}
