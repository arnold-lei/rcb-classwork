var creds = require('./connection.js');
var mysql = require('mysql');
var inquirer = require('inquirer');
var mysql = require('mysql');
var spotify  = require('spotify');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'TopSongsDB'
};);
 
connection.connect();

connection.query('SELECT * FROM top5000 LEFT JOIN topalbums ON top5000.artist=topalbums.artist;', function(err, rows, fields) {
  if (err) throw err;
  console.log();
});

inquirer.prompt([
  {
    type: 'list',
    name: 'theme',
    message: 'How may I help you?',
    choices: [
      'Tell me all songs from a specific artist',
      'Tell me all artists who have appeared more than once',
      'Tell me all data contained within a specific range',
      'Tell me about a specific song in the top 5000',
      new inquirer.Separator(),
      'Exit'
  }
]).then(function (answers) {
  switch
});
 

 
connection.end();