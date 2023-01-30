/*!!! IN EVERY LINE CHANGE tribes.resources TO mydatabase.resources !!!*/
ALTER TABLE `tribes`.`resources` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.resources (name, amount, generation, imperiaId)
VALUES ("mineral", 2000, 2000, 1);

INSERT into tribes.resources (name, amount, generation, imperiaId)
VALUES ("food", 2000, 2000, 1);