-- Development Database
DROP DATABASE IF EXISTS burgers_db_dev;
CREATE DATABASE burgers_db_dev;
USE burgers_db_dev;

CREATE TABLE burgers (
	id INT (10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

-- Test Database
DROP DATABASE IF EXISTS burgers_db_test;
CREATE DATABASE burgers_db_test;
USE burgers_db_test;

CREATE TABLE burgers (
	id INT (10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);

-- Production Database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT (10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);



