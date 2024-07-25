CREATE TABLE Hunt(
	Creature_type VARCHAR(200) DEFAULT('TBD')  UNIQUE PRIMARY KEY,
    Danger_level INT(200) DEFAULT 0,
	Rarity VARCHAR(100) DEFAULT 'TBD',
    Amount_hunted INT(100) DEFAULT 0
    );


INSERT INTO Hunt VALUES('Furry', 7, 'Common', 24)

INSERT INTO Hunt VALUES('FemBoy', 10, 'Rare', 56)

INSERT INTO Hunt VALUES('Egirl', 2, 'Very Common', 58)

INSERT INTO Hunt(Creature_type, Danger_level) VALUES('test', 5)

DESCRIBE Hunt;