# Students Admin Panel

The Students Admin Panel web application built with Node.js, Express, MySQL, Sequelize, and HBS (Handlebars) for managing student information.

## Features

- View and manage student information
- Add new students to the database
- Update existing student records
- Search for student by name - surname

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- MySQL

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sveta9669/students-admin-panel.git


Navigate to the project directory:

   cd student-admin-panel
        

Install dependencies:

    npm install

## Database Setup

Create a MySQL database for the project.

After creating the database you can 
    1.Create a table and import data using the following SQL query
    or
    2.Check the students.sql file and import it into the database
    or
    3.Run the program, go to New Student and add it manually

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `generatedId` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `students` VALUES ('1', '3190282420112023', 'Sveta', 'Kazaryan', 'sv.kaz', 'sv.kaz@tumo.org', '$2b$10$C7QR51Jmw7W4nW0HnGBP8OuQH3Ziuu5C8758zu..s/o2l.9cZgt1O', '2023-11-19 20:11:52', '2023-11-22 08:25:15');
INSERT INTO `students` VALUES ('2', '884352220112023', 'Karine', 'Hayrapetyan', 'kar.hayr', 'kar.hayr@tumo.org', '$2b$10$At5hk/gc21936q33T9MWn.ND/ONkVxu3vTxoI2rR5Pj6oH2FQ6zPm', '2023-11-20 14:32:49', '2023-11-22 09:19:23');
INSERT INTO `students` VALUES ('3', '924350020112023', 'Narek', 'Hovhannisyan', 'nar.hovh', 'nar.hovh@tumo.org', '$2b$10$IzWxaRC7b8FVPOtlN.fKje4SCtmuQ1ye5hIHw93lSy3yKqZokyWBy', '2023-11-20 14:35:11', '2023-11-21 13:35:13');
INSERT INTO `students` VALUES ('4', '381607620112023', 'Mher', 'Karapetyan', 'mh.karap', 'mh.karap@tumo.org', '$2b$10$m8vsEe/FITzANWettwOZx.3FwIcmyJnZf24JufdyW7UgrTXb2QS9a', '2023-11-20 14:36:58', '2023-11-22 13:30:28');
INSERT INTO `students` VALUES ('5', '9630422521112023', 'Gayane', 'Martirosyan', 'gay.mart', 'gay.mart@tumo.org', '$2b$10$nyOBSDsxg.KnhKaThzsTF.xtq.oaMT7/.Gw9U.ih5pocGjh/lWgaC', '2023-11-21 08:50:48', '2023-11-22 08:15:15');
INSERT INTO `students` VALUES ('6', '811696922112023', 'Vardan', 'Karapetyan', 'var.kar', 'var.kar@tumo.org', '$2b$10$YL5XBlx3GuebtwimGhIQLu5EG2OuBtyF9ZaJ9F8jgAd48txdq.vxS', '2023-11-22 11:37:56', '2023-11-22 11:37:56');
INSERT INTO `students` VALUES ('7', '8129557522112023', 'Anna', 'Stepanyan', 'ann.step', 'ann.step@tumo.org', '$2b$10$2vmn5j8SSUON5Z9A/dL/c./HOiAJgvl7k1dSJCrbJfn9QvJtV1XOy', '2023-11-22 13:31:50', '2023-11-22 13:31:50');
INSERT INTO `students` VALUES ('8', '9164654022112023', 'Davit', 'Grigoryan', 'dav.grig', 'dav.grig@tumo.org', '$2b$10$6lCEPrvxbjGqmw.5qPJqfOlKYrtLuMLdKFGqrzkxl5GQv8PCdeNhe', '2023-11-22 13:33:18', '2023-11-22 13:33:18');
INSERT INTO `students` VALUES ('9', '914982722112023', 'Gohar', 'Davtyan', 'gohar.davt', 'gohar.davt@tumo.org', '$2b$10$lwjv.7F6HE7KQ0PYpzwaAOrfYSw/wFSGxPm4VZqBkzYvMHoiK0yuO', '2023-11-22 13:34:26', '2023-11-22 13:34:26');
SET FOREIGN_KEY_CHECKS=1;


## Environment Variables

Create a .env file in the root of your project and add the following variables:

MYSQL_HOST='your_database_host'
MYSQL_PORT=your_database_port
MYSQL_DBNAME='your_database_name'
MYSQL_USER='your_database_user'
MYSQL_PASSWORD='your_database_password'
MYSQL_DIALECT='mysql'

## Node Version

If you are using Node Version Manager (NVM), the recommended Node.js version is specified in the .nvmrc file. Use the following command to switch to the correct Node.js version:

    nvm use

## Running the Application

Start the application:

    npm start

The application will be accessible at http://localhost:3000
