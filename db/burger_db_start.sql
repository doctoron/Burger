DROP DATABASE IF EXISTS cdo2a8k2u87f2eq1;
CREATE DATABASE cdo2a8k2u87f2eq1;
USE cdo2a8k2u87f2eq1;

CREATE TABLE burgers (
id INT (10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (100) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
INSERT INTO burgers (
burger_name,
devoured
) VALUES
(
"Vegan Beef Double Soy Cheese Burger",
0
),
(
"Carnie Burger",
0
),
(
"Mellow Mushroom & Swiss Double Cheese Burger",
0
),
(
"Veggie Burger & Vegan Mongolian Cheese",
0
),
(
"The Ronnie",
1
),
(
"Nicey Burger",
1
),
(
"The NYC Burger",
0
),
(
"Amazing Hogwarts Disappearing Burger",
0
),
(
"West-Coast Burger",
0
),
(
"Million Dollar Burger",
0
);