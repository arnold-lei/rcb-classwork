// Instructions

// In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

// Your "Programmer" constructor should be able to take in the following information...

// The programmer's name
// Their position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.

// Finally, create a "Programmer" object and call the method to print its contents

var inquirer = require('inquirer');

var Programmer = function(id){
	this.name = id.name,
	this.jobTitle = id.jobTitle,
	this.age = id.age,
	this.language = id.language,
	this.printInfo = function(){
		console.log('Hi my name is ' + this.name + ', I am ' + this.age + 'years old' + ' i am currently working as a '+ this.position + 'and I like to program in ' + this.language);
	}
}

inquirer.prompt([{
	{
		name: 'name',
		message: ' What is your name?',
	},
	{
		name: 'position',
		message: 'What is your current position'
	},
	{
		name: 'age',
		message: 'How old are you?'
	},
	{
		name: 'language',
		message: 'What is your favourite langauge'
	}
}])then.function(answer){
	var newProgrammer = new Programmer({answer.name, answer.position, answer.age, answer.language})
}



