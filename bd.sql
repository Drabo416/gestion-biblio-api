-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: biblio
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (2,'Astronomie'),(3,'Biologie'),(4,'Chimie'),(5,'Mathématiques'),(6,'Physique'),(7,''),(8,'mmm'),(9,'mmmp'),(10,'lorem'),(11,'livre02');
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `id` varchar(36) NOT NULL,
  `birthDate` date NOT NULL,
  `salary` int NOT NULL,
  `adresse` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emprunt`
--

DROP TABLE IF EXISTS `emprunt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emprunt` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dateEmprunt` datetime NOT NULL,
  `dateRetour` datetime DEFAULT NULL,
  `exemplaireId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fae86af0c1fca52a83456ff14e6` (`exemplaireId`),
  CONSTRAINT `FK_fae86af0c1fca52a83456ff14e6` FOREIGN KEY (`exemplaireId`) REFERENCES `exemplaire` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprunt`
--

LOCK TABLES `emprunt` WRITE;
/*!40000 ALTER TABLE `emprunt` DISABLE KEYS */;
INSERT INTO `emprunt` VALUES (5,'2023-12-16 14:20:36',NULL,32),(6,'2023-12-16 14:21:34',NULL,32),(7,'2023-12-16 14:21:51',NULL,32),(8,'2023-12-16 14:28:53',NULL,32),(9,'2023-12-16 14:29:09',NULL,29);
/*!40000 ALTER TABLE `emprunt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exemplaire`
--

DROP TABLE IF EXISTS `exemplaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exemplaire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `livreId` int DEFAULT NULL,
  `disponible` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `FK_ec2c060c5d3ecea053649b6f98b` (`livreId`),
  CONSTRAINT `FK_ec2c060c5d3ecea053649b6f98b` FOREIGN KEY (`livreId`) REFERENCES `livre` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exemplaire`
--

LOCK TABLES `exemplaire` WRITE;
/*!40000 ALTER TABLE `exemplaire` DISABLE KEYS */;
INSERT INTO `exemplaire` VALUES (22,'code',4,1),(23,'m',3,1),(24,'m',3,1),(25,'m',3,1),(26,'m',3,1),(27,'m',3,1),(28,'m',3,1),(29,'m',3,1),(30,'m',3,1),(31,'m',3,1),(32,'lorem',3,1),(33,'lorem',3,1),(34,'lorem',3,1),(35,'lorem',3,1),(36,'lorem',3,1);
/*!40000 ALTER TABLE `exemplaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livre`
--

DROP TABLE IF EXISTS `livre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `auteur` varchar(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `categorieId` int DEFAULT NULL,
  `description` text NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ce04f190cee850250db36e94ff1` (`categorieId`),
  CONSTRAINT `FK_ce04f190cee850250db36e94ff1` FOREIGN KEY (`categorieId`) REFERENCES `categorie` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livre`
--

LOCK TABLES `livre` WRITE;
/*!40000 ALTER TABLE `livre` DISABLE KEYS */;
INSERT INTO `livre` VALUES (3,'Julia Quinn','Le duc et moi',2,'Dans la société londonienne du début du XIXe siècle, la jeune et belle Daphne Bridgerton est déterminée à trouver un mari. Elle a une liste de critères très stricts, et elle est prête à tout pour les respecter. Mais lorsque le duc de Hastings, un homme riche et arrogant, entre dans sa vie, tout se complique','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8s_yHYS2qkCUVfhzoXHs0FY__L4hzzdUGTnMi2HULCrYBRoc6nQ8zBiZImSqk'),(4,'Colleen Hoover','It Ends with Us ',2,' Lily et Ryle ont tout pour être heureux. Ils sont jeunes, amoureux et ont une vie devant eux. Mais lorsque Lily découvre un terrible secret sur son petit ami, tout bascule. Elle va devoir faire un choix difficile qui changera sa vie à jamais.','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRd7GeozR5A7FBRZ5N-WpSjlw6LxmKlZy_e7yjy6zv5hfNidhLEvQ5pOM-5880j'),(5,' Nicholas Sparks','N\'oublie jamais',2,'Noah et Allie sont deux adolescents qui tombent amoureux au début des années 1940. Mais leur amour est mis à rude épreuve lorsque la Seconde Guerre mondiale éclate. Ils se séparent, mais leur amour est inébranlable.','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSc5Ap__ylYgqUrX76RIuMMOqopKqCz6Y2UEX3kjdfPOVA-jwIlKbhAwerlWH33'),(6,'Agatha Christie','Le meurtre de Roger Ackroyd',3,'Le docteur Sheppard est un médecin qui vit dans un petit village anglais. Il est témoin du meurtre de Roger Ackroyd, un riche propriétaire. Il décide d\'enquêter sur ce crime et découvre que tout le monde est suspect.','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnHdiN1gJ815FlANBbYetyJSavnB4V5_iWrQIR8PAbf53-7BTwTkBPzcGUhTHo'),(7,'Arthur Conan Doyle','Le chien des Baskerville',3,' Le professeur Challenger est un homme mystérieux qui est appelé pour enquêter sur la mort de Sir Charles Baskerville, un noble anglais. Il découvre que le fantôme d\'un chien maléfique hante la région.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UlbrPNEBmT3PSsLtJ4m_Ic7-7NRQK4EtvrObcHARzFYPzN2iy6YOO8N1s0MQ'),(8,'Stephen King','Shining',3,'ack Torrance est un écrivain qui accepte un emploi de gardien d\'un hôtel isolé pendant l\'hiver. Il emménage avec sa femme et son fils, mais il commence à perdre la raison. Il devient violent et menace sa famille.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQSE0CcTZVmJtaGmNbJuxfGJvDCEZiF0atotc36hFI64_K6Wz-1cVMNtq0J_V'),(10,'Isaac Asimov','Le monde de la chimie',4,'Ce livre est une introduction accessible à la chimie. Il explique','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDl9KB4hLO5VoyIgsKVew047r7mvgh5AnjCp4RztmTU58aQDSD_w83g5cA3pc3'),(13,'Ian Stewart','Les nombres premiers ',5,'Ce livre explore le monde fascinant des nombres premiers. Il explique comment les nombres premiers sont utilisés dans la cryptographie, la théorie des nombres et d\'autres domaines de la mathématiques.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb32F9ILEjIqxTYVvO261_X9KvpwwOGYFD5Fc1qkw97mPQTS06vKYLtpDaH5hj'),(14,'David Foster Wallace','Everything and More: A Compact History of Infinity',5,'Ce livre explore l\'idée d\'infini. Il explique comment l\'infini est utilisé dans la mathématiques, la physique et la philosophie.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb32F9ILEjIqxTYVvO261_X9KvpwwOGYFD5Fc1qkw97mPQTS06vKYLtpDaH5hj'),(15,'gestion-biblio-admin','lorem',2,'lorem','55555');
/*!40000 ALTER TABLE `livre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(36) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('d7585d98-f819-413f-b814-3ace2dd5049d','Drabo','Mohamed','drabom123@gmail.com','$2b$10$J0uSFj0rWGTLRxCsnv94gOPJFsnSAd/8L/2zKCPdwImBPGzOdNu9.','$2b$10$J0uSFj0rWGTLRxCsnv94gO','');
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

-- Dump completed on 2023-12-16 16:42:19
