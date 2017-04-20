var express = require('express');
var vhost = require('vhost');

/*
edit /etc/hosts:

127.0.0.1       kranthi
127.0.0.1       kiran
*/

// require your first app here

var app1 = require("./app1");

// require your second app here

var app2 = require("./app2");

// redirect.use(function(req, res){
//   if (!module.parent) console.log(req.vhost);
//   res.redirect('http://example.com:3000/' + req.vhost[0]);
// });

// Vhost app

var appWithVhost = module.exports = express();

appWithVhost.use(vhost('kranthi', app1)); // Serves first app

appWithVhost.use(vhost('kiran', app2)); // Serves second app

/* istanbul ignore next */



require('./router/main')(app1);
app1.set('views',__dirname + '/views');
app1.set('view engine', 'ejs');
app1.engine('html',require('ejs').renderFile);
if (!module.parent) {
  appWithVhost.listen(3000);
  console.log('Express started on port 3000');
}
})
