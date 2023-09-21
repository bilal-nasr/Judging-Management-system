-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 21, 2023 at 09:20 PM
-- Server version: 8.1.0
-- PHP Version: 7.4.3-4ubuntu2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jmstest`
--

-- --------------------------------------------------------

--
-- Table structure for table `bootcamps`
--

CREATE TABLE `bootcamps` (
  `bootcampId` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `year` year DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bootcamps`
--

INSERT INTO `bootcamps` (`bootcampId`, `name`, `type`, `year`, `created_at`, `updated_at`) VALUES
(1, 'Bootcamp 1', 'Tech', '2023', '2023-09-21 11:25:24', '2023-09-21 11:25:24'),
(2, 'Bootcamp 2', 'Business', '2023', '2023-09-21 11:25:24', '2023-09-21 11:25:24'),
(3, 'Bootcamp 3', 'Design', '2022', '2023-09-21 11:25:24', '2023-09-21 11:25:24');

-- --------------------------------------------------------

--
-- Stand-in structure for view `bootcamp_startups_view`
-- (See below for the actual view)
--
CREATE TABLE `bootcamp_startups_view` (
`bootcamp_name` varchar(45)
,`bootcamp_type` varchar(45)
,`bootcamp_year` year
,`bootcampId` int
,`startup_created_at` timestamp
,`startup_description` text
,`startup_name` varchar(255)
,`startup_updated_at` timestamp
,`startupId` int
);

-- --------------------------------------------------------

--
-- Table structure for table `instructors`
--

CREATE TABLE `instructors` (
  `instructorsId` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bootcamps_bootcampId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `instructors`
--

INSERT INTO `instructors` (`instructorsId`, `name`, `description`, `created_at`, `updated_at`, `bootcamps_bootcampId`) VALUES
(1, 'Instructor 1', 'Tech Instructor', '2023-09-21 11:25:25', '2023-09-21 11:25:25', 1),
(2, 'Instructor 2', 'Business Instructor', '2023-09-21 11:25:25', '2023-09-21 11:25:25', 2),
(3, 'Instructor 3', 'Design Instructor', '2023-09-21 11:25:25', '2023-09-21 11:25:25', 3),
(4, 'Instructor 1', 'Tech Instructor', '2023-09-21 11:25:35', '2023-09-21 11:25:35', 1),
(5, 'Instructor 2', 'Business Instructor', '2023-09-21 11:25:35', '2023-09-21 11:25:35', 2),
(6, 'Instructor 3', 'Design Instructor', '2023-09-21 11:25:35', '2023-09-21 11:25:35', 3),
(7, 'Instructor 1', 'Tech Instructor', '2023-09-21 11:27:21', '2023-09-21 11:27:21', 1),
(8, 'Instructor 2', 'Business Instructor', '2023-09-21 11:27:21', '2023-09-21 11:27:21', 2),
(9, 'Instructor 3', 'Design Instructor', '2023-09-21 11:27:21', '2023-09-21 11:27:21', 3);

-- --------------------------------------------------------

--
-- Stand-in structure for view `JudgeView`
-- (See below for the actual view)
--
CREATE TABLE `JudgeView` (
`JudgeDescription` text
,`JudgeId` int
,`UserId` int
,`UserName` varchar(255)
,`UserRole` enum('A','S','J')
,`UserUsername` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `jury`
--

CREATE TABLE `jury` (
  `juryId` int NOT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `users_userId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `jury`
--

INSERT INTO `jury` (`juryId`, `description`, `created_at`, `updated_at`, `users_userId`) VALUES
(4, 'tl1245656la', '2023-09-21 11:27:21', '2023-09-21 16:52:13', 4),
(5, 'tl1245656la', '2023-09-21 11:27:21', '2023-09-21 16:52:13', 5),
(6, 'tl1245656la', '2023-09-21 11:27:21', '2023-09-21 16:52:13', 6),
(7, 'bilal6la', '2023-09-21 16:30:48', '2023-09-21 16:55:11', 21);

-- --------------------------------------------------------

--
-- Table structure for table `jury_has_bootcamps`
--

CREATE TABLE `jury_has_bootcamps` (
  `jury_juryId` int NOT NULL,
  `bootcamps_bootcampId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `jury_has_bootcamps`
--

INSERT INTO `jury_has_bootcamps` (`jury_juryId`, `bootcamps_bootcampId`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `logId` int NOT NULL,
  `crudType` varchar(45) NOT NULL,
  `event` varchar(45) NOT NULL,
  `users_userId` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`logId`, `crudType`, `event`, `users_userId`, `created_at`, `updated_at`) VALUES
(1, 'CREATE', 'Log Event 1', 1, '2023-09-21 11:27:24', '2023-09-21 11:27:24'),
(2, 'UPDATE', 'Log Event 2', 2, '2023-09-21 11:27:24', '2023-09-21 11:27:24'),
(3, 'DELETE', 'Log Event 3', 3, '2023-09-21 11:27:24', '2023-09-21 11:27:24');

-- --------------------------------------------------------

--
-- Table structure for table `startups`
--

CREATE TABLE `startups` (
  `startupId` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bootcamps_bootcampId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `startups`
--

INSERT INTO `startups` (`startupId`, `name`, `description`, `created_at`, `updated_at`, `bootcamps_bootcampId`) VALUES
(1, 'Startup 1', 'Tech Startup', '2023-09-21 11:27:25', '2023-09-21 11:27:25', 1),
(2, 'Startup 2', 'Business Startup', '2023-09-21 11:27:25', '2023-09-21 11:27:25', 2),
(3, 'Startup 3', 'Design Startup', '2023-09-21 11:27:25', '2023-09-21 11:27:25', 3),
(4, 'startup3', 'hdsjkahdjks', '2023-09-21 11:39:07', '2023-09-21 11:39:07', 1),
(5, 'startup4', 'startdfdsf', '2023-09-21 11:39:07', '2023-09-21 11:39:07', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` enum('A','S','J') NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `username`, `password`, `name`, `role`, `token`, `created_at`, `updated_at`) VALUES
(4, 'user1', 'password1', 'User One', 'J', 'token123', '2023-09-21 11:25:25', '2023-09-21 11:41:26'),
(5, 'user2', 'password2', 'User Two', 'J', 'token456', '2023-09-21 11:25:25', '2023-09-21 11:41:40'),
(6, 'user3', 'password3', 'User Three', 'J', 'token789', '2023-09-21 11:25:25', '2023-09-21 11:25:25'),
(10, 'user_admin', 'password1', 'User One', 'A', 'token123', '2023-09-21 11:27:21', '2023-09-21 11:27:21'),
(11, 'user_superadmin', 'password2', 'User Two', 'S', 'token456', '2023-09-21 11:27:21', '2023-09-21 11:27:21'),
(12, 'user_jury', 'password3', 'User Three', 'J', 'token789', '2023-09-21 11:27:21', '2023-09-21 11:27:21'),
(21, 'test1', 'ddddd', 'diaa', 'J', NULL, '2023-09-21 16:30:46', '2023-09-21 16:38:52');

-- --------------------------------------------------------

--
-- Structure for view `bootcamp_startups_view`
--
DROP TABLE IF EXISTS `bootcamp_startups_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`jmstest`@`%` SQL SECURITY DEFINER VIEW `bootcamp_startups_view`  AS SELECT `b`.`bootcampId` AS `bootcampId`, `b`.`name` AS `bootcamp_name`, `b`.`type` AS `bootcamp_type`, `b`.`year` AS `bootcamp_year`, `s`.`startupId` AS `startupId`, `s`.`name` AS `startup_name`, `s`.`description` AS `startup_description`, `s`.`created_at` AS `startup_created_at`, `s`.`updated_at` AS `startup_updated_at` FROM (`bootcamps` `b` left join `startups` `s` on((`b`.`bootcampId` = `s`.`bootcamps_bootcampId`))) ;

-- --------------------------------------------------------

--
-- Structure for view `JudgeView`
--
DROP TABLE IF EXISTS `JudgeView`;

CREATE ALGORITHM=UNDEFINED DEFINER=`jmstest`@`%` SQL SECURITY DEFINER VIEW `JudgeView`  AS SELECT `j`.`juryId` AS `JudgeId`, `j`.`description` AS `JudgeDescription`, `u`.`userId` AS `UserId`, `u`.`name` AS `UserName`, `u`.`username` AS `UserUsername`, `u`.`role` AS `UserRole` FROM (`jury` `j` join `users` `u` on((`j`.`users_userId` = `u`.`userId`))) WHERE (`u`.`role` = 'J') ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bootcamps`
--
ALTER TABLE `bootcamps`
  ADD PRIMARY KEY (`bootcampId`);

--
-- Indexes for table `instructors`
--
ALTER TABLE `instructors`
  ADD PRIMARY KEY (`instructorsId`),
  ADD KEY `fk_instructors_bootcamps1_idx` (`bootcamps_bootcampId`);

--
-- Indexes for table `jury`
--
ALTER TABLE `jury`
  ADD PRIMARY KEY (`juryId`),
  ADD KEY `fk_jury_users1_idx` (`users_userId`);

--
-- Indexes for table `jury_has_bootcamps`
--
ALTER TABLE `jury_has_bootcamps`
  ADD PRIMARY KEY (`jury_juryId`,`bootcamps_bootcampId`),
  ADD KEY `fk_jury_has_bootcamps_bootcamps1_idx` (`bootcamps_bootcampId`),
  ADD KEY `fk_jury_has_bootcamps_jury1_idx` (`jury_juryId`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`logId`),
  ADD KEY `fk_logs_users1_idx` (`users_userId`);

--
-- Indexes for table `startups`
--
ALTER TABLE `startups`
  ADD PRIMARY KEY (`startupId`),
  ADD KEY `fk_startups_bootcamps1_idx` (`bootcamps_bootcampId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bootcamps`
--
ALTER TABLE `bootcamps`
  MODIFY `bootcampId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `instructors`
--
ALTER TABLE `instructors`
  MODIFY `instructorsId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `jury`
--
ALTER TABLE `jury`
  MODIFY `juryId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `logId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `startups`
--
ALTER TABLE `startups`
  MODIFY `startupId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `instructors`
--
ALTER TABLE `instructors`
  ADD CONSTRAINT `fk_instructors_bootcamps1` FOREIGN KEY (`bootcamps_bootcampId`) REFERENCES `bootcamps` (`bootcampId`);

--
-- Constraints for table `jury`
--
ALTER TABLE `jury`
  ADD CONSTRAINT `fk_jury_users1` FOREIGN KEY (`users_userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `jury_has_bootcamps`
--
ALTER TABLE `jury_has_bootcamps`
  ADD CONSTRAINT `fk_jury_has_bootcamps_bootcamps1` FOREIGN KEY (`bootcamps_bootcampId`) REFERENCES `bootcamps` (`bootcampId`),
  ADD CONSTRAINT `fk_jury_has_bootcamps_jury1` FOREIGN KEY (`jury_juryId`) REFERENCES `jury` (`juryId`);

--
-- Constraints for table `logs`
--
ALTER TABLE `logs`
  ADD CONSTRAINT `fk_logs_users1` FOREIGN KEY (`users_userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `startups`
--
ALTER TABLE `startups`
  ADD CONSTRAINT `fk_startups_bootcamps1` FOREIGN KEY (`bootcamps_bootcampId`) REFERENCES `bootcamps` (`bootcampId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
