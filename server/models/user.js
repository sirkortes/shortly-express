const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you user database model methods here
var model = new Model('users');

module.exports.create = function(data,callback){

  var options = { username: data.username,
    password: utils.hasher(data.password)
  };

  model.create(options)
  .then(function(data){
    callback(data);
  }).catch(function(error){
    if ( error ) { callback(error); }
  });

};


module.exports.login = function(data, callback){

  var options = { username: data.username,
    password: utils.hasher(data.password)
  };

  model.get(options)
  .then(function(data){
    callback(data);
  }).catch(function(error){
    if ( error ) { callback(error); }
  });

};