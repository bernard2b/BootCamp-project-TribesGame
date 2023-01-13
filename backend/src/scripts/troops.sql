/*!!! IN EVERY LINE CHANGE tribes.troops TO mydatabase.troops !!!*/
ALTER TABLE `tribes`.`troops` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep)
VALUES ("", "melee", 10, 10, 100, 100, 6, 5);

INSERT into tribes.troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep)
VALUES ("", "ranged", 10, 20, 75, 150, 9, 10);

INSERT into tribes.troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep)
VALUES ("", "mounted", 25, 5, 200, 200, 15, 20);

