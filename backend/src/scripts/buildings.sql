/*!!! IN EVERY LINE CHANGE tribes.buildings TO mydatabase.buildings !!!*/
ALTER TABLE `tribes`.`buildings` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "nexus", 1500, 15, 50, 50);

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "mine", 500, 5, 100, 0);

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "farm", 500, 5, 0, 100);

INSERT into tribes.buildings (name, type,  mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "lab", 1000, 10, 0, 0);

INSERT into tribes.buildings (name, type,  mineralCost, timeCost, mineralPerMinute, foodPerMinute)
VALUES ("", "barracks", 1000, 10, 0, 0);