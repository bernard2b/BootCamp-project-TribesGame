ALTER TABLE `tribes`.`users` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.users (name, password, email)
VALUES ("user1", "$2b$10$t7oxiwchWGHa/B9w0AzrYO2WH2rQbA86YSuQjSTmwIrpC/0ZXN7V2", "example1@mail.com");

ALTER TABLE `tribes`.`imperia` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.imperia (name, coordinates, userId)
VALUES ("Imperium1", 1, 1);

ALTER TABLE `tribes`.`buildings` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.buildings (name, type, mineralCost, timeCost, mineralPerMinute, foodPerMinute, imperiumId)
VALUES ("", "nexus", 1500, 15, 50, 50, 1);


ALTER TABLE `tribes`.`resources` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.resources (name, amount, generation, imperiumId)
VALUES ("mineral", 500, 50, 1);

INSERT into tribes.resources (name, amount, generation, imperiumId)
VALUES ("food", 500, 50, 1);