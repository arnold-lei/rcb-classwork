CREATE DATABASE moviePlannerDB;
USE moviePlannerDB;

CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO plans (plan) VALUES ('Plan to fight a ninja.');
INSERT INTO plans (plan) VALUES ('Become the Hokage!');
