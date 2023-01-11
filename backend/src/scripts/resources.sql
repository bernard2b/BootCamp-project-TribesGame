/*!!! IN EVERY LINE CHANGE tribes.resources TO mydatabase.resources !!!*/
ALTER TABLE `tribes`.`resources` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.resources (name, amount, generation)
VALUES ("mineral", 0, 0);

INSERT into tribes.resources (name, amount, generation)
VALUES ("food", 0, 0);