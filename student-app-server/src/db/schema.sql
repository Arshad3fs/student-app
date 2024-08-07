CREATE TABLE IF NOT EXISTS `student`.`address` (
  `ADDRESSID` SMALLINT NOT NULL AUTO_INCREMENT,
  `HOUSENO` VARCHAR(20) NULL DEFAULT NULL,
  `STREET` VARCHAR(200) NULL DEFAULT NULL,
  `TOWN` VARCHAR(200) NULL DEFAULT NULL,
  `DISTRICT` VARCHAR(200) NULL DEFAULT NULL,
  `STATE` VARCHAR(200) NULL DEFAULT NULL,
  `COUNTRY` VARCHAR(200) NULL DEFAULT NULL,
  `IS_SCHOOL_ADDR` VARCHAR(1) NULL DEFAULT NULL,
  PRIMARY KEY (`ADDRESSID`));



CREATE TABLE IF NOT EXISTS `student`.`school` (
  `ID` SMALLINT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(200) NULL DEFAULT NULL,
  `ADDRESSID` SMALLINT NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `ADDRESSID` (`ADDRESSID` ASC) VISIBLE,
  CONSTRAINT `school_ibfk_1`
    FOREIGN KEY (`ADDRESSID`)
    REFERENCES `student`.`address` (`ADDRESSID`));



CREATE TABLE IF NOT EXISTS `student`.`student` (
  `ID` SMALLINT NOT NULL AUTO_INCREMENT,
  `FIRSTNAME` VARCHAR(100) NULL DEFAULT NULL,
  `LASTNAME` VARCHAR(100) NULL DEFAULT NULL,
  `GENDER` VARCHAR(1) NULL DEFAULT NULL,
  `DOB` DATE NULL DEFAULT NULL,
  `CONTACTNUMBER` INT NULL DEFAULT NULL,
  `ISADMIN` VARCHAR(1) NULL DEFAULT NULL,
  `ADDRESSID` SMALLINT NULL DEFAULT NULL,
  `SCHOOLID` SMALLINT NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `ADDRESSID` (`ADDRESSID` ASC) VISIBLE,
  INDEX `SCHOOLID` (`SCHOOLID` ASC) VISIBLE,
  CONSTRAINT `student_ibfk_1`
    FOREIGN KEY (`ADDRESSID`)
    REFERENCES `student`.`address` (`ADDRESSID`),
  CONSTRAINT `student_ibfk_2`
    FOREIGN KEY (`SCHOOLID`)
    REFERENCES `student`.`school` (`ID`));




CREATE TABLE IF NOT EXISTS `student`.`user` (
  `ID` SMALLINT NOT NULL AUTO_INCREMENT,
  `FIRSTNAME` VARCHAR(100) NOT NULL,
  `LASTNAME` VARCHAR(100) NOT NULL,
  `EMAIL` VARCHAR(100) NOT NULL,
  `PASSWORD` VARCHAR(100) NOT NULL,
  `IS_ADMIN` VARCHAR(1) NOT NULL,
  PRIMARY KEY (`ID`));