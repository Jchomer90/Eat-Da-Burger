DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', DEFAULT);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', DEFAULT);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Cheeseburger', DEFAULT);
INSERT INTO burgers (burger_name, devoured) VALUES ('Turkey Burger', DEFAULT);
