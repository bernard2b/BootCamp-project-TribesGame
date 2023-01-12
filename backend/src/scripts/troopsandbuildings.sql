/* createdAt, updatedAt --> SET DEFAULT VALUE: CURRENT_TIMESTAMP */
/*TROOPS*/

INSERT into troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep)
VALUES ("", "melee", 10, 10, 100, 100, 6, 5);

INSERT into troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep)
VALUES ("", "ranged", 10, 20, 75, 150, 9, 10);

INSERT into troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep)
VALUES ("", "mounted", 25, 5, 200, 200, 15, 20);


/*BUILDINGS*/

INSERT into buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "nexus", 1500, 15, 50, 50);

INSERT into buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "mine", 500, 5, 100, 0);

INSERT into buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "farm", 500, 5, 0, 100);

INSERT into buildings (name, type,  mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "lab", 1000, 10, 0, 0);

INSERT into buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "barracks", 1000, 10, 0, 0);
