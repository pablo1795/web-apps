CREATE TABLE `jsquiz_bbdd`.`quiz-user` (
  `id` INT NOT NULL , 
  `name` TEXT NOT NULL , 
  `email` TEXT NOT NULL , 
  `points` INT NOT NULL , 
  `date` DATE NOT NULL 
  , PRIMARY KEY (`id`)
) ENGINE = InnoDB;