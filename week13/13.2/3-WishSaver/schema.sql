-- Make a database called "wishes_db"
-- Inside of that database, make a table called "wishes" which will have a wish column and an id column. 
-- The id will be automatically incremented while also being the primary key.


CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES ('I wish I had a million wishes!');
INSERT INTO wishes (wish) VALUES ('Peace on earth');
INSERT INTO wishes (wish) VALUES ('I wish I had a pony!');

