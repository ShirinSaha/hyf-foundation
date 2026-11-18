--SELECT QUERY--
SELECT name 
FROM "user" 
WHERE  id =3;

SELECT name 
FROM "user"  
WHERE  id = 5;

SELECT * 
FROM  "user" 
WHERE  name 
LIKE '%Aarika%';

SELECT name,phone 
FROM "user";

SELECT name 
FROM "user" 
WHERE  id =10;

SELECT title,created 
FROM task 
ORDER BY created ASC
lIMIT 3;

SELECT * 
FROM task 
WHERE description 
IS NULL;

SELECT * 
FROM user 
WHERE email 
lIKE '%.com%';

SELECT title 
FROM task 
WHERE status_id=2;

SELECT * 
FROM task 
WHERE title
lIKE '%database%';

SELECT name 
FROM user 
WHERE phone
IS NULL;

SELECT title, created 
FROM task
ORDER BY created 
DESC LIMIT 5;

SELECT * 
FROM task 
WHERE status_id = 1 
OR status_id =2
ORDER BY title;

--UPDATE QUERY--
UPDATE task 
SET status_id = 3 
WHERE id=1; 

UPDATE task 
SET description ="Write and test SELECT queries" 
WHERE  id=2;

UPDATE task 
set title= "Practice: Review query results" 
WHERE  id=3;

UPDATE task 
set due_date = 2031-01-15 
WHERE id=4;

UPDATE user 
set  phone = 12345678 
WHERE id=1;

UPDATE tag 
SET name = "Practice" 
WHERE id=1;

--INSERT QUERY--
INSERT INTO task(title, created, updated, status_id, user_id)
VALUES ("Practice 1: Read SQL",datetime('now'),datetime('now'), 1, 1);

INSERT INTO task (title, description, created, updated, status_id)
VALUES ("Practice 2: Write queries","Blueberry", datetime('now'), datetime('now'), 1);

INSERT INTO task (title, created, updated, status_id, User_id)
VALUES ("Practice 3: Write queries", datetime('now'), datetime('now'),2 ,1);

INSERT INTO task (title, created,updated, status_id,user_id) 
VALUES ('Practice 4: plan a project','2026-11-08', '2026-11-09', 1, 1);

INSERT INTO user (name,email) 
VALUES('Bob', 'bob@gmail.com');

INSERT INTO tag (name) 
VALUES('School');




--DELETE QUERY--

DELETE FROM task WHERE title like 'Practice 1%';
SELECT * FROM task WHERE title like 'Practice 1%';

DELETE FROM user WHERE name = 'Bob';
SELECT * FROM user WHERE name = 'Bob';

DELETE FROM tag WHERE name = 'School';
SELECT * FROM tag WHERE name = 'School';

--COMBINE EXERCISE--

SELECT * FROM user;
INSERT INTO user (name,email,phone)
VALUES ('Jack', 'jack03@gmail.com', '33914239');
SELECT * FROM user;


SELECT id FROM user WHERE name = 'Jack';


SELECT * FROM task;
INSERT INTO task (title, created, updated, status_id, user_id) 
values('Learn SQL', '2019-07-09', '2020-09-01', 3, 13);

SELECT * FROM task WHERE user_id = 13;

SELECT * FROM task;
INSERT INTO task (title, created, updated, status_id, user_id) 
values('Learn JavaScript', '2019-07-09', '2020-09-01', 3, 13);

SELECT * FROM task WHERE user_id = 13;

SELECT * 
FROM task;

INSERT INTO task (title, created, updated, status_id, user_id) 
values('Learn HTML & CSS', '2019-07-09', '2020-09-01', 3, 13);

SELECT * 
FROM task 
WHERE user_id = 13;

update task set status_id= 2 WHERE user_id=13;
SELECT * FROM task WHERE user_id=13;

delete FROM task WHERE title = 'Learn JavaScript';
SELECT * FROM task WHERE title = 'Learn JavaScript';

--CREATE TABLE--

CREATE TABLE practice_book (id integer PRIMARY KEY, title text NOT NULL , author text);
SELECT * FROM practice_book;

INSERT INTO practice_book(title, author) 
values('Harry Potter','JK Rowling');

INSERT INTO practice_book(title, author) 
values('you vs World','Bear gryls');

SELECT * 
FROM practice_book;










