CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `users` VALUES (1,'Ramon','ramon@ramon.com.br','$2a$08$gzqY02IgWPHzukIz2VGWAeiI9gitXO8sACWw0SqMgm3k5TUKr28te','2022-11-19 13:56:13','2021-12-13 19:56:13'),(2,'Cesar2','cesar2@celke.com.br','$2a$08$dwogaFfsNZQJ6gJapkwVj.QyLpzvya53bp8fdFaO/ywHfLpGMliLy','2021-12-13 20:05:29','2021-12-13 20:05:29'),(3,'Cesar3','cesar3@celke.com.br','$2a$08$uXo6.xGR.D6oPlo0/8sqzuOoPcSZjQxJRZOpI4zNRBLDi3EpT1WEK','2022-11-19 13:15:08','2022-11-19 13:15:08');