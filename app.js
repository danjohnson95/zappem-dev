var express = require('express'),
	app = express(),
	path = require('path'),
	routes = require('./app/routes'),
	swig = require('swig'),
	db = require('./app/models/model');

	app.use(express.static(path.join(__dirname, 'public')));
	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname+'/app/views');
	
	//Development Only
	app.set('view cache', false);
	swig.setDefaults({cache: false});
	
	app.use('/', routes);

	app.listen(5867);