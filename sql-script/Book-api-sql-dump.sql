CREATE DATABASE  IF NOT EXISTS `library` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `library`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: library
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id_book` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `book_name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_book`),
  KEY `fk_id_user_idx` (`id_user`),
  CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (15,7,'A Game of Thrones','2022-01-13 10:02:12','2022-01-13 10:31:32'),(16,7,'A Clash of Kings','2022-01-13 10:02:28',NULL),(17,7,'A Storm of Swords','2022-01-13 10:02:43',NULL),(18,7,'A Feast for Crows','2022-01-13 10:03:03',NULL),(19,7,'A Dance with Dragons','2022-01-13 10:03:15',NULL),(20,7,'The Winds of Winter','2022-01-13 10:03:28',NULL),(21,8,'The Last Wish','2022-01-13 10:04:47',NULL),(22,8,'Sword of Destiny','2022-01-13 10:05:15',NULL),(23,8,'Blood of Elves','2022-01-13 10:05:28',NULL),(24,8,'Time of Contempt','2022-01-13 10:05:46',NULL),(25,9,'Carrie','2022-01-13 10:06:54',NULL),(26,9,'The Shining','2022-01-13 10:07:09',NULL),(27,9,'The Stand','2022-01-13 10:07:30',NULL),(28,9,'Pet Sematary','2022-01-13 10:07:48',NULL),(29,9,'Doctor Sleep','2022-01-13 10:08:25',NULL),(30,10,'Harry Potter and the Philosopher\'s Stone','2022-01-13 10:09:50',NULL),(31,10,'Harry Potter and the Chamber of Secrets','2022-01-13 10:10:01',NULL),(32,10,'Harry Potter and the Prisoner of Azkaban','2022-01-13 10:10:13',NULL),(33,10,'Harry Potter and the Goblet of Fire','2022-01-13 10:10:24',NULL),(34,10,'Harry Potter and the Order of the Phoenix','2022-01-13 10:10:39',NULL),(35,11,'Dune','2022-01-13 10:12:02',NULL),(36,11,'Dune Messiah','2022-01-13 10:12:17',NULL),(37,11,'Children of Dune','2022-01-13 10:12:28',NULL),(38,11,'God Emperor of Dune','2022-01-13 10:12:38',NULL),(39,11,'Heretics of Dune','2022-01-13 10:12:49',NULL),(40,12,'The Hobbit','2022-01-13 10:19:00',NULL),(41,12,'The Fellowship of the Ring','2022-01-13 10:19:19',NULL),(42,12,'The Two Towers','2022-01-13 10:19:33',NULL),(43,12,'The Return of the King','2022-01-13 10:19:49',NULL),(44,12,'The Silmarillion','2022-01-13 10:20:46',NULL),(45,13,'Eragon','2022-01-13 10:21:42',NULL),(46,13,'Eldest','2022-01-13 10:21:56',NULL),(47,13,'Brisingr','2022-01-13 10:22:16',NULL),(48,14,'The Word for World is Forest','2022-01-13 10:25:10',NULL),(49,14,'Tales from Earthsea','2022-01-13 10:25:17',NULL),(50,14,'The Wind\'s Twelve Quarters','2022-01-13 10:26:14',NULL),(51,15,'The Hitchhiker\'s Guide to the Galaxy ','2022-01-13 10:26:55',NULL),(52,15,'Doctor Who','2022-01-13 10:27:17',NULL),(54,11,'Dominik','2022-01-17 08:21:08','2022-01-17 08:23:05');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'author');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `id_role` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL,
  `first_name` varchar(60) DEFAULT NULL,
  `last_name` varchar(60) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  KEY `fk_id_role_idx` (`id_role`),
  CONSTRAINT `fk_id_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,1,'dominik.bosnjak94@gmail.com','$2b$10$Mawf4.L7nEJWHVidHO7qSuB4i23zDl1kV2fxjT7JJQ67f1OPCeXQS','Dominik','Bosnjak','Elm Street','2022-01-10 22:58:02',NULL),(7,2,'george.raymond.richard.martin@gmail.com','$2b$10$Ji7kmtg/whJwWzwGmXkx9OjtqBcAwd9Zuj6mlGAFleuW5r.235xLq','George Raymond Richard','Martin',NULL,'2022-01-13 09:34:43',NULL),(8,2,'andrzej.sapkowski@gmail.com','$2b$10$7ONWBEYYF0NfR./M9/4JeeQI8439PUJnG5k02nvkk.iLMQu57oLrG','Andrzej','Sapkowski',NULL,'2022-01-13 09:49:48',NULL),(9,2,'stephen.king@gmail.com','$2b$10$RkPeMOxtZLC2cEQJs0kVXegyNptp3t87WJwWYWO5NJfv0klowt4Sy','Stephen','King',NULL,'2022-01-13 09:50:54',NULL),(10,2,'joanne.rowling@gmail.com','$2b$10$V3NITCMM8.vmZSViF0/mG.WEGCHi7AV7MZ/.QmQH/q5iGjAil4oq.','Joanne','Rowling',NULL,'2022-01-13 09:52:02',NULL),(11,2,'frank.herbert@gmail.com','$2b$10$m4HoA6fpdbw4bQ/M7rgGBeESPGS54EfXGFscONLRvHW1dI.pweQvG','Frank','Herbert',NULL,'2022-01-13 09:52:47',NULL),(12,2,'john.ronald.reuel.tolkien@gmail.com','$2b$10$KYt6xN2XdfOUbS5gGH9NT.3SdN0HQVffDCwHzfcNt4XLDSJ9gFw.2','John Ronald Reuel','Tolkien',NULL,'2022-01-13 09:54:02',NULL),(13,2,'christopher.paolini@gmail.com','$2b$10$Gmcozk0n4Wv80p8TyJDWZuQjuzGeeYTyusVxmN88upiq4JmgnDXz6','Christopher','Paolini',NULL,'2022-01-13 09:55:38',NULL),(14,2,'ursula.kroeber@gmail.com','$2b$10$L3rs34rBbzYYUt.RUp34B.Iy4nlBrnuo7m/peiNOeleoDPWL5dgCS','Ursula','Kroeber Le Guin',NULL,'2022-01-13 09:56:55',NULL),(15,2,'douglas.adams@gmail.com','$2b$10$KVHiBJXCm7MfyzZiM8LnXu0/yBJBLRbqvGI8bLOyPNBip.3CXPeeW','Douglas','Adams',NULL,'2022-01-13 09:57:45',NULL),(29,2,'fdasdfad','$2b$10$HiPf1OP4zr93sfHaNfEKVegqpEBpcET58Cc6PNmGiyMkZ8Y4yBj1K','asfdfdfa','sdfafdaf',NULL,'2022-01-17 09:48:49',NULL),(30,2,'test@gmail.com','$2b$10$MD9W8pQ60ilgWT2XANTqGuwLfr.QQIitogmxtaAUfYHehTYjSARMu','Neki','Treci',NULL,'2022-01-17 10:00:42','2022-01-17 12:37:22'),(34,2,'test2@gmail.com','$2b$10$1dLN.bLzAo.TJpDMT6hQTuS6ak/HtkwJ1Pu.5ijIZP5CStgVzwMZa','dfasdfad','dsfasdfa',NULL,'2022-01-17 12:37:48',NULL),(36,2,'dominik.bosnjak944@gmail.com','$2b$10$q61ucHVsYEaTIPwiX8/DfeBCAMmHpwd.kV62N.VfcD.n38eLffLoW','Dominik','Bosnjak',NULL,'2022-01-17 14:07:04',NULL),(37,2,'dominik.bosnjak945@gmail.com','$2b$10$QS6EIagVSyYizH8LC1MjCOkxlNKtAwqL1zPrq4wTtXvFJNiP240s.','Dominik','Bosnjak',NULL,'2022-01-17 14:07:51',NULL),(38,2,'dominik.bosnjak96@gmail.com','$2b$10$Z1aD4minczgJ/Mz6i6GibOXNrKMSdl4kAasEwJdeF6tKHDHx9gVdq','Dominik','Bosnjak',NULL,'2022-01-17 14:11:49',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-17 15:16:46
