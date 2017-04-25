const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

module.exports.hasher = function(password){

	return crypto.createHash('sha256')
					   .update(password)
					   .digest('hex');
}
