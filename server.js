var express = require('express');

app = express();

// simple logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(express.static(__dirname + '/public'));

app.listen(8090, function() {
  console.log('server started..');
});
