fs = require('fs')
fs.writeFile(".env", "TOKEN_SECRET=" +  require('crypto').randomBytes(64).toString('hex'), (err) => {if (err) return console.log(err); console.log("wrote to .env file")})
