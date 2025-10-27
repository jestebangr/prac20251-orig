DROP TABLE IF EXISTS recipes;
CREATE TABLE recipes (
    url VARCHAR(250),
    image VARCHAR(250),
    name VARCHAR(250),
    description TEXT,
    rattings INT,
    t_prepartion VARCHAR(100),
    t_cooking VARCHAR(100),
    difficult VARCHAR(100)
);

LOAD DATA INFILE '/docker-entrypoint-initdb.d/recipes-data.csv' INTO TABLE recipes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;