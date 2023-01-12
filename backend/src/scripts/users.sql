/*!!! IN EVERY LINE CHANGE tribes.users TO mydatabase.users !!!*/
ALTER TABLE `tribes`.`users` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;

INSERT into tribes.users (name, password, email)
VALUES ("user1", "$2b$10$t7oxiwchWGHa/B9w0AzrYO2WH2rQbA86YSuQjSTmwIrpC/0ZXN7V2", "example1@mail.com");

INSERT into tribes.users (name, password, email)
VALUES ("user2", "$2y$12$vUw4OU4EAl4w4vC6/lA33OtDSYGhiIdekdT9iOoSs9/ckwrffaEui", "example2@mail.com");
