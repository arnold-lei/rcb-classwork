var file = require('./file.js');

var geocoder = require('geocoder');

geocoder.geocode(process.argv[2], function(err, data){
	if(!err){
		console.log(JSON.stringify(data));
	}
})


