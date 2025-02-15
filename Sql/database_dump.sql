-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `article_link` varchar(255) NOT NULL,
  `article_title` varchar(255) NOT NULL,
  `date_of_article` date NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `source_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'https://www.newsbytesapp.com/news/entertainment/newsbytesexclusive-harsh-mayar-reveals-why-he-chose-gullak/story','#NewsBytesExclusive: Harsh Mayar reveals why he chose his \'Gullak\' character','2022-04-26','https://i.cdn.newsbytesapp.com/images/l65220220425094613.jpeg?tr=w-720','newsbytesapp.com');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interviews`
--

DROP TABLE IF EXISTS `interviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interviews` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_of_interview` date NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `interview_link` varchar(255) NOT NULL,
  `interview_title` varchar(255) NOT NULL,
  `source_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
INSERT INTO `interviews` VALUES (1,'2022-02-08','https://i.cdn.newsbytesapp.com/images/l87720220208134041.jpeg?tr=w-720','https://www.newsbytesapp.com/news/entertainment/why-anchal-singh-agreed-to-do-yehkaalikaaliankhein/story','#NewsBytesExclusive: \'Never saw Purva as negative character,\' says Anchal Singh','newsbytesapp.com'),(2,'2021-12-01','https://i.cdn.newsbytesapp.com/images/l50920211201133430.jpeg?tr=w-720','https://www.newsbytesapp.com/news/entertainment/newsbytesexclusive-why-is-randeep-hooda-in-legal-soup/story','#NewsBytesExclusive: Screenwriter alleges police won\'t register FIR against Randeep Hooda','newsbytesapp.com'),(3,'2021-06-21','https://i.cdn.newsbytesapp.com/images/l69520220620163257.jpeg?tr=w-720','https://www.newsbytesapp.com/news/entertainment/onir-reacts-to-defence-ministry-rejecting-his-script/story','#NewsBytesExclusive: DefMin rejecting script on gay soldier \'homophobic,\' says Onir','newsbytesapp.com'),(4,'2022-04-26','https://i.cdn.newsbytesapp.com/images/l65220220425094613.jpeg?tr=w-720','https://www.newsbytesapp.com/news/entertainment/newsbytesexclusive-harsh-mayar-reveals-why-he-chose-gullak/story','#NewsBytesExclusive: Harsh Mayar reveals why he chose his \'Gullak\' character','newsbytesapp.com');
/*!40000 ALTER TABLE `interviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_of_review` date NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `review_link` varchar(255) NOT NULL,
  `review_title` varchar(255) NOT NULL,
  `source_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'2025-02-06','https://i.cdn.newsbytesapp.com/images/l57120211102194431.jpeg?tr=w-720','https://www.newsbytesapp.com/news/entertainment/jai-bhim-review-goosebumps-inducing-tale-of-discrimination/story','\'Jai Bhim\': Suriya-led movie will make you question day-to-day conduct','newzbytesapp.com'),(2,'2021-06-18','https://i.cdn.newsbytesapp.com/images/l99120210618161209.png?tr=w-720','https://www.newsbytesapp.com/news/entertainment/jagame-thandhiram-immigration-issue-lies-behind-gang-wars/story','\'Jagame Thandhiram\' review: Dhanush\'s action drama entertains, makes you empathize','newsbytesapp.com'),(3,'2024-07-26','https://i.cdn.newsbytesapp.com/images/l3120240726162021.jpeg?tr=w-720','https://www.newsbytesapp.com/news/entertainment/deadpool-wolverine-review-marvel-finally-gets-it-right/story','\'Deadpool & Wolverine\' review: Ryan Reynolds turns Marvel\'s unexpected superhero','newsbytesapp.com'),(4,'2022-04-30','https://i.cdn.newsbytesapp.com/images/l25720220430132142.jpeg?tr=w-720','https://www.newsbytesapp.com/news/entertainment/heropanti-2-review-why-re-we-still-making-these/story','\'Heropanti 2\' review: Should impose penalty for making such films!','newsbytesapp.com');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-15 23:33:51
