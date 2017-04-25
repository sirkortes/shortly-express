const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you user database model methods here
var model = new Model('users');

module.exports.create = function(data,callback){

	var hash = utils.hasher(data.password);
	var options = { username: data.username,
		password: hash 
	};

	model.create(options)
	.then(function(data){
		callback(data);
	}).catch(function(error){
		if ( error ) { callback(error); }
	});

};
