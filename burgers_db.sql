DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (45) NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('BIG MAC', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('WHOPPER', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Quesadilla Burger', FALSE);