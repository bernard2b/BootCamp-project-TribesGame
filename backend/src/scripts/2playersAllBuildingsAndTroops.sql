ALTER TABLE `tribes`.`users` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.users (name, password, email)
VALUES ("user1", "$2b$10$t7oxiwchWGHa/B9w0AzrYO2WH2rQbA86YSuQjSTmwIrpC/0ZXN7V2", "example1@mail.com");

INSERT into tribes.users (name, password, email)
VALUES ("user2", "$2y$12$vUw4OU4EAl4w4vC6/lA33OtDSYGhiIdekdT9iOoSs9/ckwrffaEui", "example2@mail.com");

ALTER TABLE `tribes`.`imperia` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.imperia (name, coordinates, userId)
VALUES ("Imperium1", 1, 1);

INSERT into tribes.imperia (name, coordinates, userId)
VALUES ("Imperium2", 100, 2);

ALTER TABLE `tribes`.`buildings` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "nexus", 1500, 15, 50, 50, 1);

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "mine", 500, 5, 100, 0, 1);

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "farm", 500, 5, 0, 100, 1);

INSERT into tribes.buildings (name, type,  mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "lab", 1000, 10, 0, 0, 1);

INSERT into tribes.buildings (name, type,  mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "barracks", 1000, 10, 0, 0, 1);

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "nexus", 1500, 15, 50, 50, 2);

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "mine", 500, 5, 100, 0, 2);

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "farm", 500, 5, 0, 100, 2);

INSERT into tribes.buildings (name, type,  mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "lab", 1000, 10, 0, 0, 2);

INSERT into tribes.buildings (name, type,  mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "barracks", 1000, 10, 0, 0, 2);

ALTER TABLE `tribes`.`troops` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep, imperiumId)
VALUES ("", "melee", 10, 10, 100, 100, 5, 5, 1);

INSERT into tribes.troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep, imperiumId)
VALUES ("", "ranged", 10, 20, 75, 150, 9, 10, 1);

INSERT into tribes.troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep, imperiumId)
VALUES ("", "mounted", 25, 5, 200, 200, 15, 20, 1);

INSERT into tribes.troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep, imperiumId)
VALUES ("", "melee", 10, 10, 100, 100, 5, 5, 2);

INSERT into tribes.troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep, imperiumId)
VALUES ("", "ranged", 10, 20, 75, 150, 9, 10, 2);

INSERT into tribes.troops (name, type, attack, defense, healthPoint, mineralCost, timeCost, foodUpkeep, imperiumId)
VALUES ("", "mounted", 25, 5, 200, 200, 15, 20, 2);

ALTER TABLE `tribes`.`resources` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.resources (name, amount, generation, imperiumId)
VALUES ("mineral", 10000, 10000, 1);

INSERT into tribes.resources (name, amount, generation, imperiumId)
VALUES ("food", 10000, 10000, 1);

INSERT into tribes.resources (name, amount, generation, imperiumId)
VALUES ("mineral", 10000, 10000, 2);

INSERT into tribes.resources (name, amount, generation, imperiumId)
VALUES ("food", 10000, 10000, 2);