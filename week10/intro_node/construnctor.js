// Instructions
// Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)
// Each character created using your constructor should have the following properties...
// Name: The character's name --> String
// Profession: What the character does for a living --> String
// Gender: The character's gender --> String
// Age: The character's age --> Integer
// Strength: Abstraction for how strong the character is --> Integer
// HitPoints (HP): Abstraction for how much health the character has --> Integer
// PrintStats: Function which prints all of a character's properties to the screen
// Once you have created your constructor, create two new characters and print their properties to the screen
// Fool around and get comfortable with your constructor before moving onto the next parts of the activity
// Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...
// IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
// Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
// LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
// BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!

function Character(obj) {
  this.name = obj.name,
  this.profession = obj.profession,
  this.gender = obj.gender,
  this.age = obj.age,
  this.strength = obj.strength,
  this.hitPoints = obj.hitPoints,
  this.isAlive = function(){
  	if(this.hitPoints > 0){
  		console.log(this.name + ' is alive');
  		return true;
  	}
  },
  this.attack = function(enemy){
  	enemy.hitpoints = enemy.hitpoints - this.strength;
  	console.log(enemy.hitpoints)
  },
  this.printStats = function(){
  	console.log(this)
  }
};

var Arnold = new Character({
	name: 'Arnold Lei',
	profession: 'Paladin',
	gender: 'Male',
	age: 28,
	strength: 1000,
	hitPoints: 9999,
});

var Jenny = new Character({
	name: 'Jenny Lei',
	profession: 'Sorceress',
	gender: 'Female',
	age: 25,
	strength: 1000,
	hitPoints: 9999,
});

console.log(Arnold.attack(Jenny));
//adding to the animal constructor gives or dog and cat new features. We didnt have to update them individually




