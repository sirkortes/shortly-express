const models = require('../models');
const Promise = require('bluebird');
const utils = require('../lib/hashUtils');
const cookieMonster = require('./cookieParser');

module.exports.createSession = (req, res, next) => {

  if ( typeof req.session !== 'object') {
    req.session = {};
  }
  req.session["hash"] = utils.hasher( String(new Date()) );

  console.log("SESSION:", req.session.hash );

  // create the cookie
  if ( !req.headers.cookie ){
    req.headers.cookie = 'shortlyid='+utils.hasher(String(new Date()))
  }
  cookieMonster(req, res, next);
  
  console.log("COOKIEHEAD",req.headers.cookie)
  console.log("RES COOKIES:", res.cookies );

  // next();

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

