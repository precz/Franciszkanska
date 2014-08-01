require('./server').listen(
	process.env.PORT,
	process.env.MONGOLAB_URI,
	process.env.PWD
);