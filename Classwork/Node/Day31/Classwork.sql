-- ============================A============================
CREATE TABLE stock(
id SERIAL primary key,
fruit_name VARCHAR(50),
description VARCHAR(255),
quantity_on_stock INT,
price INT
);

DROP TABLE stock;








-- ============================B============================
CREATE TABLE employee(
employee_id SERIAL primary key,
first_name VARCHAR(60),
last_name VARCHAR(60),
salary INT,
contract_length INT
);

INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Steven','King',10000,3);
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Neena', 'Kochhar', 8000, 2);
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('David','Austin',12000,2);
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Nancy','Greenberg',3000,1);




-- ============================C============================
-- Write a query that returns the First and Last Name of every employee earning between 5-11k
SELECT first_name,last_name FROM employee WHERE salary >= 5000 AND salary <=11000;
| first_name | last_name |
|------------+-----------|
| Steven     | King      |
| Neena      | Kochhar   |



-- Which employees are employed for less than 2 years?
SELECT first_name,last_name FROM employee WHERE contract_length < 2;
| first_name | last_name |
|------------+-----------|
| Nancy      | Greenberg |



-- Add two more employees to the table, make up the data.
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Sam', 'O''Shaughnessy', 10, 20);
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Altaf', 'Rehmani', 100000, 1);
| employee_id | first_name |   last_name   | salary | contract_length |
|-------------+------------+---------------+--------+-----------------|
|           1 | Steven     | King          |  10000 |               3 |
|           2 | Neena      | Kochhar       |   8000 |               2 |
|           3 | David      | Austin        |  12000 |               2 |
|           4 | Nancy      | Greenberg     |   3000 |               1 |
|           5 | Sam        | O''Shaughnessy|     10 |              20 |
|           6 | Altaf      | Rehmani       | 100000 |               1 |



-- Nancy Greenberg got a new contract, 2 years, 8000 salary. Update the table.
UPDATE employee SET salary = 8000, contract_length = 2 WHERE first_name ='Nancy';
| employee_id | first_name |   last_name   | salary | contract_length |
|-------------+------------+---------------+--------+-----------------|
|           1 | Steven     | King          |  10000 |               3 |
|           2 | Neena      | Kochhar       |   8000 |               2 |
|           3 | David      | Austin        |  12000 |               2 |
|           5 | Sam        | O''Shaughnessy|     10 |              20 |
|           6 | Altaf      | Rehmani       | 100000 |               1 |
|           4 | Nancy      | Greenberg     |   8000 |               2 |



-- Sort the table by salary, from high to low. You might want to look here if you are stuck.
SELECT * FROM employee ORDER BY salary DESC;
| employee_id | first_name |   last_name   | salary | contract_length |
|-------------+------------+---------------+--------+-----------------|
|           6 | Altaf      | Rehmani       | 100000 |               1 |
|           3 | David      | Austin        |  12000 |               2 |
|           1 | Steven     | King          |  10000 |               3 |
|           2 | Neena      | Kochhar       |   8000 |               2 |
|           4 | Nancy      | Greenberg     |   8000 |               2 |
|           5 | Sam        | O''Shaughnessy|     10 |              20 |