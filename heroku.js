var express    = require('express'),
    path       = require('path'),
    url        = require('url');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view options', { layout: true, pretty: true });
  // app.set('view engine', 'jade');

  // Setup the basic express settings.
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());

  app.use(app.router)

  app.use('/', express.static(path.join(__dirname, '/')));
});

app.get('/', function(req, res) {
  res.redirect('/runner.html');

});

var port = process.env.PORT || 4001;
app.listen(port, function() { 
  console.log('StartUp: Jasmine+JSCoverage Demo ' + port ); 
});