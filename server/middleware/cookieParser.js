module.exports = (req, res, next) => {

  var dough = req.headers.cookie;

  // console.log("DOUGH", dough)

  if ( !dough ){
    res.cookies = {};

  } else {
    // console.log("COOKING")
    var cookies = {};
    dough.split(';').forEach(function(cookieball){
      var pieces = cookieball.split('=');
      cookies[ pieces[0].trim() ] = pieces[1];
    });
    res.cookies = cookies;
  }
  // console.log("outbound",req.cookies)
  next();
};