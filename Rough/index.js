var application_root = "C:\DATA\Learning\Scripting"
    express = require('express')
    vhost   = require('vhost')


function createVirtualHost(domainName, dirPath)
{
    return vhost(domainName, express.static(dirPath));
}

var app = express();

var kranthihost = createVirtualHost("kranthi","./kranthiapp/kranthi.js")
var kiranhost  = createVirtualHost("kiran","./kiranapp/kiran.js")

app.use(kranthihost);
app.use(kiranhost);

var port = 3000;
app.listen(port, function()
{ console.log('Express listening on port 3000')})