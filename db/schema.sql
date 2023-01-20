DROP DATABASE IF EXISTS trackem_db;
CREATE DATABASE trackem_db;

USE trackem_db;

CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    roles_id INT NOT NULL,
    department_name VARCHAR(30) NOT NULL
); 

CREATE TABLE employees(
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    roles_id INT NOT NULL, 
    department VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL
);

CREATE TABLE roles(
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL
    -- FOREIGN KEY (department_id) REFERENCES department_id
);