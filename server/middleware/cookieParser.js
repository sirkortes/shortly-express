const parseCookies = (req, res, next) => {

  var dough = req.headers.Cookies;
  // if no cookies return empty object
  if ( !dough ){
    req.cookies = {};
  }
  // parse cookies back to Cookie object
  else {

    var cookies = {};
    dough.split(';').forEach(function(cookieball){

      var cut = cookieball.getIndexOf('=');

      // var key = cookieball.match('//');
      // var val = cookieball.match('//');

      cookies[ cookieball.slice(0,cut) ] = cookieball.slice(match+1);
    });
    req.cookies = cookies;
    console.log("COOKIES = ",req.cookies)

  }
};

module.exports = parseCookies;