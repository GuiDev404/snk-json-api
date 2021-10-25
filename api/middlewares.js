const { validate } = require('uuid');

module.exports = {
  verifyID: function (req, res, next, id) {
  
    if(!(id && validate(id)) ) {
      return res.status(400).json({
        status: 400,
        message: 'ID no valido.'
      })
    }
  
    next()
  } 
}