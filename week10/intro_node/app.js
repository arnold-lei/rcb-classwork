var greet = require('./greet');
var geocoder = require('geocoder');
var person = {
	firstName: 'Arnold',
	lastName: 'Lei',
	greet: function(){
		console.log('Hello ' + this.firstName + ' ' + this.lastName)
	}
}

var everyArgumentAfter = process.argv.splice(2, process.argv.length - 1).join(' ');
console.log(everyArgumentAfter);

geocoder.geocode(everyArgumentAfter, function(err, data){
	if(!err){
		console.log(JSON.stringify(data, null, 2));
	}
})

