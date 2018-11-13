-- ========================================A========================================
CREATE TABLE citrus (
id SERIAL primary key,
name VARCHAR(255) not null,
color VARCHAR(255),
taste VARCHAR(255)
);

INSERT INTO stock (quantity, price, citrus_id) VALUES (33,25,1);
INSERT INTO stock (quantity, price, citrus_id) VALUES (50,15,2);
INSERT INTO stock (quantity, price, citrus_id) VALUES (10,35,3);
INSERT INTO stock (quantity, price, citrus_id) VALUES (0,20,4);

SELECT citrus.name
FROM citrus
JOIN stock
ON citrus.id = stock.citrus_id
AND citrus.color = 'orange'
AND stock.quantity > 0;

/*
    name
------------
 orange
 grapefruit
*/

-- ========================================B========================================
SELECT * FROM citrus FULL OUTER JOIN stock ON citrus.id = stock.citrus_id;

/*
 id |    name    | color  | taste  | id | quantity | price | citrus_id
----+------------+--------+--------+----+----------+-------+-----------
  1 | lemon      | yellow | sour   |  1 |       33 |    25 |         1
  2 | orange     | orange | juicy  |  2 |       50 |    15 |         2
  3 | grapefruit | orange | bitter |  3 |       10 |    35 |         3
  4 | lime       | green  | sour   |  4 |        0 |    20 |         4
  */

-- ========================================C========================================

BEGIN;
UPDATE stock SET quantity = quantity + 20 FROM citrus WHERE stock.citrus_id =
citrus.id AND citrus.name = 'lemon';
COMMIT;

BEGIN;
UPDATE stock SET quantity = quantity + 20 FROM citrus WHERE stock.citrus_id =
citrus.id AND citrus.name = 'lemon';
COMMIT;

BEGIN;
UPDATE stock SET quantity = quantity + 40 FROM citrus WHERE stock.citrus_id =
citrus.id AND citrus.name = 'orange';
COMMIT;

BEGIN;
SELECT quantity FROM stock JOIN citrus ON citrus.id = stock.citrus_id WHERE citrus.name = 'orange';
UPDATE stock SET quantity = quantity - 20 FROM citrus WHERE stock.citrus_id =
citrus.id AND citrus.name = 'orange';
COMMIT;

BEGIN;
UPDATE stock SET quantity = quantity + 40 FROM citrus WHERE stock.citrus_id =
citrus.id AND citrus.name = 'lime';
COMMIT;

BEGIN;
SELECT quantity FROM stock JOIN citrus ON citrus.id = stock.citrus_id WHERE citrus.name = 'lemon';
UPDATE stock SET quantity = quantity - 30 FROM citrus WHERE stock.citrus_id =
citrus.id AND citrus.name = 'lemon';
COMMIT;

BEGIN;
SELECT quantity FROM stock JOIN citrus ON citrus.id = stock.citrus_id WHERE citrus.name = 'lime';
UPDATE stock SET quantity = quantity - 20 FROM citrus WHERE stock.citrus_id =
citrus.id AND citrus.name = 'lime';
COMMIT;

BEGIN;
UPDATE stock SET quantity = quantity + 40 FROM citrus WHERE stock.citrus_id =
citrus.id AND citrus.name = 'grapefruit';
COMMIT;

BEGIN;
SELECT quantity FROM stock JOIN citrus ON citrus.id = stock.citrus_id WHERE citrus.name = 'grapefruit';
UPDATE stock SET quantity = quantity - 20 FROM citrus WHERE stock.citrus_id =
citrus.id AND citrus.name = 'grapefruit';
COMMIT;

/*
 id | quantity | price | citrus_id
----+----------+-------+-----------
  2 |       70 |    15 |         2
  4 |       20 |    20 |         4
  3 |       30 |    35 |         3
  1 |       23 |    25 |         1
  */