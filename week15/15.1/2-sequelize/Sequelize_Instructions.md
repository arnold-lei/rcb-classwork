* **Instructions:**

- Spend the next few ~15 minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

	- Answer: What is Sequelize?
	- Sequelize is a promise-based ORM for Node.js.

	- Answer: What advantages does it offer?
	- It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

	- Answer: How do I install it? How do I incorporate it into my app?
	- $ npm install --save sequelize
	- var sequelize = new Sequelize('database', 'username', 'password', {
		  host: 'localhost',
		  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

		  pool: {
		    max: 5,
		    min: 0,
		    idle: 10000
		  },

		  // SQLite only
		  storage: 'path/to/database.sqlite'
		});

// Or you can simply use a connection uri
var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

	- Answer: What the heck is a Sequelize model? What role will it play?
	- A Model represents a table in the database. Sometimes you might also see it referred to as model, or simply as factory. This class should not be instantiated directly, it is created using sequelize.define, and already created models can be loaded using sequelize.import

	- Answer: Let's say I have the below table in MySQL. 

		| Country     | PhoneCode | Capital   | IndependenceYear |
		|-------------|-----------|-----------|------------------|
		| Afghanistan | 93        | Kabul     | 1919             |
		| Belarus     | 375       | Misk      | 1991             |
		| Netherlands | 31        | Amsterdam | 1648             |
		| Oman        | 968       | Muscat    | 1970             |
		| Zambia      | 260       | Lusaka    | 1964             |

		- How would I model it in Sequelize? 

		- How would I query for all the records where the Independence Year was less than 50 years ago?

		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

	- Bonus: What is umzug? How could I use umzug to create a table? 