-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 11, 2023 at 08:05 PM
-- Server version: 8.1.0
-- PHP Version: 7.4.3-4ubuntu2.19
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
--
-- Database: `jmstest`
--
-- --------------------------------------------------------
--
-- Table structure for table `admin`
--
CREATE TABLE `admin` (
    `adminId` int NOT NULL,
    `description` text NOT NULL,
    `user_id` int NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `admin`
--
INSERT INTO `admin` (
        `adminId`,
        `description`,
        `user_id`,
        `created_at`,
        `updated_at`
    )
VALUES (
        5,
        'testing1',
        41,
        '2023-10-01 19:41:45',
        '2023-10-01 19:41:45'
    ),
    (
        6,
        'testing2',
        42,
        '2023-10-01 19:42:31',
        '2023-10-01 19:42:31'
    ),
    (
        7,
        'testing3',
        43,
        '2023-10-01 19:42:41',
        '2023-10-01 19:42:41'
    );
-- --------------------------------------------------------
--
-- Stand-in structure for view `admin_users_view`
-- (See below for the actual view)
--
CREATE TABLE `admin_users_view` (
    `userId` int,
    `username` varchar(255),
    `user_name` varchar(255),
    `role` enum('A', 'S', 'J'),
    `adminId` int,
    `admin_description` text,
    `admin_created_at` timestamp,
    `admin_updated_at` timestamp
);
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `bootcamps`
--
INSERT INTO `bootcamps` (
        `bootcampId`,
        `name`,
        `type`,
        `year`,
        `created_at`,
        `updated_at`
    )
VALUES (
        1,
        'FSD2023',
        'Tech',
        '2023',
        '2023-09-21 11:25:24',
        '2023-09-24 20:44:58'
    ),
    (
        2,
        'Bootcamp 2',
        'Business',
        '2023',
        '2023-09-21 11:25:24',
        '2023-09-21 11:25:24'
    ),
    (
        3,
        'Bootcamp 3',
        'Design',
        '2022',
        '2023-09-21 11:25:24',
        '2023-09-21 11:25:24'
    ),
    (
        11,
        'bilal2023',
        'Tech',
        '1999',
        '2023-10-01 17:09:40',
        '2023-10-01 17:12:00'
    ),
    (
        12,
        'FSD-2023',
        'FSD',
        '2023',
        '2023-10-09 20:12:46',
        '2023-10-09 20:12:46'
    ),
    (
        13,
        'ui/ux-2023',
        'UI/UX',
        '2023',
        '2023-10-10 13:11:38',
        '2023-10-10 13:11:38'
    ),
    (
        14,
        'ideal-2023',
        'Ideal Lab',
        '2023',
        '2023-10-10 13:13:11',
        '2023-10-10 13:13:11'
    ),
    (
        15,
        'devops-2023',
        'Devops',
        '2023',
        '2023-10-10 13:14:18',
        '2023-10-10 13:14:18'
    ),
    (
        16,
        '',
        '',
        '2023',
        '2023-10-11 10:59:58',
        '2023-10-11 10:59:58'
    );
-- --------------------------------------------------------
--
-- Stand-in structure for view `bootcamp_startups_view`
-- (See below for the actual view)
--
CREATE TABLE `bootcamp_startups_view` (
    `bootcampId` int,
    `bootcamp_name` varchar(45),
    `bootcamp_type` varchar(45),
    `bootcamp_year` year,
    `startupId` int,
    `startup_name` varchar(255),
    `startup_description` text,
    `startup_created_at` timestamp,
    `startup_updated_at` timestamp
);
-- --------------------------------------------------------
--
-- Table structure for table `criteria`
--
CREATE TABLE `criteria` (
    `id` int NOT NULL,
    `name` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `max_grade` int NOT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `criteria`
--
INSERT INTO `criteria` (
        `id`,
        `name`,
        `description`,
        `max_grade`,
        `created_at`,
        `updated_at`
    )
VALUES (
        1,
        'Criteria 1',
        'Team',
        90,
        '2023-09-25 13:34:41',
        '2023-10-10 14:08:19'
    ),
    (
        2,
        'Criteria 2',
        'Problem/Solution fit',
        85,
        '2023-09-25 13:34:41',
        '2023-10-10 14:09:01'
    ),
    (
        4,
        'didi',
        'Innovation',
        6,
        '2023-09-25 13:34:41',
        '2023-10-10 14:09:31'
    ),
    (
        5,
        'Criteria 5',
        'Prototype is technically sound',
        95,
        '2023-09-25 13:34:41',
        '2023-10-10 14:10:26'
    ),
    (
        6,
        'bel',
        'Unique Value Proposition',
        5,
        '2023-09-28 16:56:49',
        '2023-10-10 14:11:23'
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
    `bootcamps_bootcampId` int DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `instructors`
--
INSERT INTO `instructors` (
        `instructorsId`,
        `name`,
        `description`,
        `created_at`,
        `updated_at`,
        `bootcamps_bootcampId`
    )
VALUES (
        4,
        'Instructor 1',
        'Tech Instructor',
        '2023-09-21 11:25:35',
        '2023-09-21 11:25:35',
        1
    ),
    (
        5,
        'Instructor 2',
        'Business Instructor',
        '2023-09-21 11:25:35',
        '2023-09-21 11:25:35',
        2
    ),
    (
        6,
        'Instructor 3',
        'Design Instructor',
        '2023-09-21 11:25:35',
        '2023-09-21 11:25:35',
        3
    ),
    (
        7,
        'Instructor 1',
        'Tech Instructor',
        '2023-09-21 11:27:21',
        '2023-09-21 11:27:21',
        1
    ),
    (
        8,
        'Instructor 2',
        'Business Instructor',
        '2023-09-21 11:27:21',
        '2023-09-21 11:27:21',
        2
    ),
    (
        9,
        'Instructor 3',
        'Design Instructor',
        '2023-09-21 11:27:21',
        '2023-09-21 11:27:21',
        3
    ),
    (
        20,
        'bilal',
        'uni',
        '2023-09-22 17:15:20',
        '2023-09-22 17:15:20',
        1
    ),
    (
        22,
        'Trainer1',
        'helllnngf',
        '2023-09-24 18:12:37',
        '2023-09-24 18:12:37',
        1
    ),
    (
        23,
        'bla',
        'blablabla',
        '2023-10-10 12:42:34',
        '2023-10-10 12:42:34',
        12
    ),
    (
        24,
        'Testing1',
        'hsjakcjsbacbhsb',
        '2023-10-10 13:02:29',
        '2023-10-10 13:02:29',
        12
    ),
    (
        25,
        'Testing1',
        'hsjakcjsbacbhsb',
        '2023-10-10 13:03:33',
        '2023-10-10 13:03:33',
        12
    ),
    (
        26,
        'Testing3',
        'hsjakcjsbacbhsb',
        '2023-10-10 13:04:44',
        '2023-10-10 13:04:44',
        12
    );
-- --------------------------------------------------------
--
-- Stand-in structure for view `instructors_bootcamps_view`
-- (See below for the actual view)
--
CREATE TABLE `instructors_bootcamps_view` (
    `instructorsId` int,
    `instructor_name` varchar(255),
    `instructor_description` text,
    `bootcampId` int,
    `bootcamp_name` varchar(45),
    `bootcamp_type` varchar(45),
    `bootcamp_year` year
);
-- --------------------------------------------------------
--
-- Stand-in structure for view `JudgeView`
-- (See below for the actual view)
--
CREATE TABLE `JudgeView` (
    `JudgeId` int,
    `JudgeDescription` text,
    `UserId` int,
    `UserName` varchar(255),
    `UserUsername` varchar(255),
    `UserRole` enum('A', 'S', 'J'),
    `UserToken` varchar(255)
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `jury`
--
INSERT INTO `jury` (
        `juryId`,
        `description`,
        `created_at`,
        `updated_at`,
        `users_userId`
    )
VALUES (
        22,
        'test update',
        '2023-10-10 22:08:23',
        '2023-10-11 13:45:55',
        55
    ),
    (
        23,
        'fkjdsvnjckdsnvjdslkjvkdsnvklndsklvn\nfjklsjv kds\ndksljf ldsjfldsf\nfjdskljfnds',
        '2023-10-10 22:10:23',
        '2023-10-10 22:10:23',
        56
    );
-- --------------------------------------------------------
--
-- Table structure for table `jury_has_bootcamps`
--
CREATE TABLE `jury_has_bootcamps` (
    `jury_juryId` int NOT NULL,
    `bootcamps_bootcampId` int NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `jury_has_bootcamps`
--
INSERT INTO `jury_has_bootcamps` (`jury_juryId`, `bootcamps_bootcampId`)
VALUES (22, 12),
    (23, 13);
-- --------------------------------------------------------
--
-- Table structure for table `jury_startup_grades`
--
CREATE TABLE `jury_startup_grades` (
    `jury_id` int NOT NULL,
    `startup_id` int NOT NULL,
    `grade` int DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `logs`
--
INSERT INTO `logs` (
        `logId`,
        `crudType`,
        `event`,
        `users_userId`,
        `created_at`,
        `updated_at`
    )
VALUES (
        1,
        'CREATE',
        'Log Event 1',
        1,
        '2023-09-21 11:27:24',
        '2023-09-21 11:27:24'
    ),
    (
        2,
        'UPDATE',
        'Log Event 2',
        2,
        '2023-09-21 11:27:24',
        '2023-09-21 11:27:24'
    ),
    (
        3,
        'DELETE',
        'Log Event 3',
        3,
        '2023-09-21 11:27:24',
        '2023-09-21 11:27:24'
    );
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
    `bootcamps_bootcampId` int DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `startups`
--
INSERT INTO `startups` (
        `startupId`,
        `name`,
        `description`,
        `created_at`,
        `updated_at`,
        `bootcamps_bootcampId`
    )
VALUES (
        1,
        'Startup 1',
        'Tech Startup',
        '2023-09-21 11:27:25',
        '2023-09-21 11:27:25',
        1
    ),
    (
        2,
        'Startup 2',
        'Business Startup',
        '2023-09-21 11:27:25',
        '2023-09-21 11:27:25',
        2
    ),
    (
        3,
        'Startup 3',
        'Design Startup',
        '2023-09-21 11:27:25',
        '2023-09-21 11:27:25',
        3
    ),
    (
        9,
        'sally ',
        'very good',
        '2023-10-10 13:37:33',
        '2023-10-10 13:37:33',
        12
    ),
    (
        11,
        'Mehde',
        'fndksnckjndkjvjkfdv lfd',
        '2023-10-10 15:32:29',
        '2023-10-10 15:32:29',
        14
    );
-- --------------------------------------------------------
--
-- Table structure for table `startup_criteria`
--
CREATE TABLE `startup_criteria` (
    `startup_id` int NOT NULL,
    `criteria_id` int NOT NULL,
    `jury_id` int DEFAULT NULL,
    `jury_grade` int DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `startup_criteria`
--
INSERT INTO `startup_criteria` (
        `startup_id`,
        `criteria_id`,
        `jury_id`,
        `jury_grade`
    )
VALUES (1, 1, 1, 85),
    (1, 2, 1, 80),
    (2, 1, 2, 88),
    (2, 2, 2, 89),
    (3, 1, 3, 87),
    (3, 2, 3, 91),
    (4, 1, 1, 86),
    (4, 2, 1, 88);
-- --------------------------------------------------------
--
-- Table structure for table `users`
--
CREATE TABLE `users` (
    `userId` int NOT NULL,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `name` varchar(255) NOT NULL,
    `role` enum('A', 'S', 'J') NOT NULL,
    `token` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `users`
--
INSERT INTO `users` (
        `userId`,
        `username`,
        `password`,
        `name`,
        `role`,
        `token`,
        `created_at`,
        `updated_at`
    )
VALUES (
        40,
        'FinalSuper',
        '$2a$10$g16KMHUUj3/cd0J98TActu/N3YMyiuT2WpBIX05goz3lzqRuE7m1y',
        'SuperAdmin',
        'S',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTcwNDE0ODd9.OtX9OBN_oWYEw42HbEFI0ohe5mOjoHQzEcz6N-lYlQY',
        '2023-10-01 19:29:33',
        '2023-10-11 16:24:47'
    ),
    (
        41,
        'FinalAdmin1',
        '$2a$10$gWObHDeI2M6QSRs30fqI.OCs30uUXNIQx2brLxCtYeEZXNqjG./ta',
        'Admin1',
        'A',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTcwMTYwMjV9.fUjKYOTvPM-UQQu3b77hUXg_xAjL9DdR_62scv2SQ58',
        '2023-10-01 19:41:44',
        '2023-10-11 09:20:24'
    ),
    (
        42,
        'FinalAdmin2',
        '$2a$10$UF6Q33Gfh8Rq4Nhqj8KpaOs/EX8CEo9ZieAFhGehIb2rd1Zo7wNBu',
        'Admin2',
        'A',
        NULL,
        '2023-10-01 19:42:30',
        '2023-10-01 19:42:30'
    ),
    (
        43,
        'FinalAdmin3',
        '$2a$10$5Ovkk1QaFVSvufjgalBlMufy9PcA4UtLT85N/LwDY.tStdKVaCtA.',
        'Admin3',
        'A',
        NULL,
        '2023-10-01 19:42:41',
        '2023-10-01 19:42:41'
    ),
    (
        55,
        'FinalJury4',
        '$2a$10$3zmpzeCoPrVugZMaL.i74OaJFjmuZn6XFnHoRGgqpR6OV8yqNhIq.',
        'Jury',
        'J',
        NULL,
        '2023-10-10 22:08:22',
        '2023-10-11 14:05:17'
    ),
    (
        56,
        'FinalJury1',
        '$2a$10$YguISqPzFCt9d1S5XWhteex7Pey/hEOpslST5JrB8xJDsN9tYYoXq',
        'Jury1',
        'J',
        NULL,
        '2023-10-10 22:10:22',
        '2023-10-10 22:10:22'
    );
-- --------------------------------------------------------
--
-- Structure for view `admin_users_view`
--
DROP TABLE IF EXISTS `admin_users_view`;
CREATE VIEW `admin_users_view` AS
SELECT `u`.`userId` AS `userId`,
    `u`.`username` AS `username`,
    `u`.`name` AS `user_name`,
    'u'.`role AS ` role `,
    ` a `.` adminId ` AS ` adminId `,
    ` a `.` description ` AS ` admin_description `,
    ` a `.` created_at ` AS ` admin_created_at `,
    ` a `.` updated_at ` AS ` admin_updated_at `
FROM ` users ` AS ` u `
LEFT JOIN ` admin ` AS ` a ` ON (` u `.` userId ` = ` a `.` user_id `)
WHERE ` u `.` role ` = 'A';

-- --------------------------------------------------------
--
-- Structure for view ` bootcamp_startups_view `
--
DROP TABLE IF EXISTS ` bootcamp_startups_view `;
CREATE VIEW ` bootcamp_startups_view ` AS
SELECT ` b `.` bootcampId ` AS ` bootcampId `,
    ` b `.` name ` AS ` bootcamp_name `,
    ` b `.` type ` AS ` bootcamp_type `,
    ` b `.` year ` AS ` bootcamp_year `,
    ` s `.` startupId ` AS ` startupId `,
    ` s `.` name ` AS ` startup_name `,
    ` s `.` description ` AS ` startup_description `,
    ` s `.` created_at ` AS ` startup_created_at `,
    ` s `.` updated_at ` AS ` startup_updated_at `
FROM (
        ` bootcamps ` ` b `
        left join ` startups ` ` s ` on((` b `.` bootcampId ` = ` s `.` bootcamps_bootcampId `))
    );
-- --------------------------------------------------------
--
-- Structure for view ` instructors_bootcamps_view `
--
DROP TABLE IF EXISTS ` instructors_bootcamps_view `;
CREATE VIEW ` instructors_bootcamps_view ` AS
SELECT ` i `.` instructorsId ` AS ` instructorsId `,
    ` i `.` name ` AS ` instructor_name `,
    ` i `.` description ` AS ` instructor_description `,
    ` b `.` bootcampId ` AS ` bootcampId `,
    ` b `.` name ` AS ` bootcamp_name `,
    ` b `.` type ` AS ` bootcamp_type `,
    ` b `.` year ` AS ` bootcamp_year `
FROM (
        ` instructors ` ` i `
        join ` bootcamps ` ` b ` on((` i `.` bootcamps_bootcampId ` = ` b `.` bootcampId `))
    );
-- --------------------------------------------------------
--
-- Structure for view ` JudgeView `
--
DROP TABLE IF EXISTS ` JudgeView `;
CREATE VIEW ` JudgeView ` AS
SELECT ` j `.` juryId ` AS ` JudgeId `,
    ` j `.` description ` AS ` JudgeDescription `,
    ` u `.` userId ` AS ` UserId `,
    ` u `.` name ` AS ` UserName `,
    ` u `.` username ` AS ` UserUsername `,
    ` u `.` role ` AS ` UserRole `,
    ` u `.` token ` AS ` UserToken `
FROM (
        ` jury ` ` j `
        join ` users ` ` u ` on((` j `.` users_userId ` = ` u `.` userId `))
    )
WHERE (` u `.` role ` = 'J');
--
-- Indexes for dumped tables
--

--
-- Indexes for table ` admin `
--
ALTER TABLE ` admin `
ADD PRIMARY KEY (` adminId `),
    ADD KEY ` fk_admin_user ` (` user_id `);
--
-- Indexes for table ` bootcamps `
--
ALTER TABLE ` bootcamps `
ADD PRIMARY KEY (` bootcampId `);
--
-- Indexes for table ` criteria `
--
ALTER TABLE ` criteria `
ADD PRIMARY KEY (` id `);
--
-- Indexes for table ` instructors `
--
ALTER TABLE ` instructors `
ADD PRIMARY KEY (` instructorsId `),
    ADD KEY ` fk_instructors_bootcamps1_idx ` (` bootcamps_bootcampId `);
--
-- Indexes for table ` jury `
--
ALTER TABLE ` jury `
ADD PRIMARY KEY (` juryId `),
    ADD KEY ` fk_jury_users1_idx ` (` users_userId `);
--
-- Indexes for table ` jury_has_bootcamps `
--
ALTER TABLE ` jury_has_bootcamps `
ADD PRIMARY KEY (` jury_juryId `, ` bootcamps_bootcampId `),
    ADD KEY ` fk_jury_has_bootcamps_bootcamps1_idx ` (` bootcamps_bootcampId `),
    ADD KEY ` fk_jury_has_bootcamps_jury1_idx ` (` jury_juryId `);
--
-- Indexes for table ` jury_startup_grades `
--
ALTER TABLE ` jury_startup_grades `
ADD PRIMARY KEY (` jury_id `, ` startup_id `),
    ADD KEY ` startup_id ` (` startup_id `);
--
-- Indexes for table ` logs `
--
ALTER TABLE ` logs `
ADD PRIMARY KEY (` logId `),
    ADD KEY ` fk_logs_users1_idx ` (` users_userId `);
--
-- Indexes for table ` startups `
--
ALTER TABLE ` startups `
ADD PRIMARY KEY (` startupId `),
    ADD KEY ` fk_startups_bootcamps1_idx ` (` bootcamps_bootcampId `);
--
-- Indexes for table ` startup_criteria `
--
ALTER TABLE ` startup_criteria `
ADD PRIMARY KEY (` startup_id `, ` criteria_id `),
    ADD KEY ` criteria_id ` (` criteria_id `),
    ADD KEY ` jury_id ` (` jury_id `);
--
-- Indexes for table ` users `
--
ALTER TABLE ` users `
ADD PRIMARY KEY (` userId `),
    ADD UNIQUE KEY ` username_UNIQUE ` (` username `);
--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table ` admin `
--
ALTER TABLE ` admin `
MODIFY ` adminId ` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 8;
--
-- AUTO_INCREMENT for table ` bootcamps `
--
ALTER TABLE ` bootcamps `
MODIFY ` bootcampId ` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 17;
--
-- AUTO_INCREMENT for table ` criteria `
--
ALTER TABLE ` criteria `
MODIFY ` id ` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 7;
--
-- AUTO_INCREMENT for table ` instructors `
--
ALTER TABLE ` instructors `
MODIFY ` instructorsId ` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 28;
--
-- AUTO_INCREMENT for table ` jury `
--
ALTER TABLE ` jury `
MODIFY ` juryId ` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 25;
--
-- AUTO_INCREMENT for table ` logs `
--
ALTER TABLE ` logs `
MODIFY ` logId ` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 4;
--
-- AUTO_INCREMENT for table ` startups `
--
ALTER TABLE ` startups `
MODIFY ` startupId ` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 12;
--
-- AUTO_INCREMENT for table ` users `
--
ALTER TABLE ` users `
MODIFY ` userId ` int NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 58;
--
-- Constraints for dumped tables
--

--
-- Constraints for table ` admin `
--
ALTER TABLE ` admin `
ADD CONSTRAINT ` fk_admin_user ` FOREIGN KEY (` user_id `) REFERENCES ` users ` (` userId `) ON DELETE CASCADE;
--
-- Constraints for table ` instructors `
--
ALTER TABLE ` instructors `
ADD CONSTRAINT ` fk_instructors_bootcamps1 ` FOREIGN KEY (` bootcamps_bootcampId `) REFERENCES ` bootcamps ` (` bootcampId `);
--
-- Constraints for table ` jury `
--
ALTER TABLE ` jury `
ADD CONSTRAINT ` fk_jury_users1 ` FOREIGN KEY (` users_userId `) REFERENCES ` users ` (` userId `);
--
-- Constraints for table ` jury_has_bootcamps `
--
ALTER TABLE ` jury_has_bootcamps `
ADD CONSTRAINT ` fk_jury_has_bootcamps_bootcamps1 ` FOREIGN KEY (` bootcamps_bootcampId `) REFERENCES ` bootcamps ` (` bootcampId `),
    ADD CONSTRAINT ` fk_jury_has_bootcamps_jury1 ` FOREIGN KEY (` jury_juryId `) REFERENCES ` jury ` (` juryId `);
--
-- Constraints for table ` jury_startup_grades `
--
ALTER TABLE ` jury_startup_grades `
ADD CONSTRAINT ` jury_startup_grades_ibfk_1 ` FOREIGN KEY (` jury_id `) REFERENCES ` jury ` (` juryId `),
    ADD CONSTRAINT ` jury_startup_grades_ibfk_2 ` FOREIGN KEY (` startup_id `) REFERENCES ` startups ` (` startupId `);
--
-- Constraints for table ` logs `
--
ALTER TABLE ` logs `
ADD CONSTRAINT ` fk_logs_users1 ` FOREIGN KEY (` users_userId `) REFERENCES ` users ` (` userId `);
--
-- Constraints for table ` startups `
--
ALTER TABLE ` startups `
ADD CONSTRAINT ` fk_startups_bootcamps1 ` FOREIGN KEY (` bootcamps_bootcampId `) REFERENCES ` bootcamps ` (` bootcampId `);
--
-- Constraints for table ` startup_criteria `
--
ALTER TABLE ` startup_criteria `
ADD CONSTRAINT ` startup_criteria_ibfk_1 ` FOREIGN KEY (` startup_id `) REFERENCES ` startups ` (` startupId `),
    ADD CONSTRAINT ` startup_criteria_ibfk_2 ` FOREIGN KEY (` criteria_id `) REFERENCES ` criteria ` (` id `),
    ADD CONSTRAINT ` startup_criteria_ibfk_3 ` FOREIGN KEY (` jury_id `) REFERENCES ` jury ` (` juryId `);
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;