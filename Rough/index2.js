var express = require('express');
var vhost = require('vhost');

/*
edit /etc/hosts:

127.0.0.1       api.mydomain.local
127.0.0.1       admin.mydomain.local
*/

// require your first app here

var app1 = require("./kranthi.js");

// require your second app here

var app2 = require("./kiran.js");

// redirect.use(function(req, res){
//   if (!module.parent) console.log(req.vhost);
//   res.redirect('http://example.com:3000/' + req.vhost[0]);
// });

// Vhost app

var appWithVhost = module.exports = express();

appWithVhost.use(vhost('kranthi', kranthi)); // Serves first app

appWithVhost.use(vhost('kiran', kiran)); // Serves second app

/* istanbul ignore next */
if (!module.parent) {
  appWithVhost.listen(3000);
  console.log('Express started on port 3000');
}