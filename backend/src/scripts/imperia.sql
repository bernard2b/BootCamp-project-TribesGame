/*!!! IN EVERY LINE CHANGE tribes.imperia TO mydatabase.imperia !!!*/
ALTER TABLE `tribes`.`imperia` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.imperia (name, coordinateX, coordinateY)
VALUES ("Imperium1", 1, 1);

INSERT into tribes.imperia (name, coordinateX, coordinateY)
VALUES ("Imperium2", 100, 100);