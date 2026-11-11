--Assignment--

--1. How many tasks are in the task table?
SELECT COUNT(*)
FROM task;


--2. How many tasks do not have a valid due date?

SELECT COUNT(*)
FROM task
WHERE due_date IS NULL;


--3. Find all the tasks that are marked as done.
SELECT *
FROM task
JOIN status ON task.status_id = status.id
WHERE LOWER(status.name)= 'done';


--4. Find all the tasks that are not marked as done.
SELECT *
FROM task
JOIN status ON task.status_id = status.id
WHERE LOWER(status.name) != 'done';


--5. Get all tasks, sorted with the most recently created first.

SELECT *
FROM task
ORDER BY created DESC;


--6. Get the single most recently created task.
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;


--7. Get the title and due date of all tasks where the title or description contains "database".
SELECT title, due_date
FROM task
WHERE LOWER(title) LIKE '%database%'
OR LOWER(description) LIKE '%database%';



--8. Get the title and status (as text) of all tasks.
SELECT task.title, status.name
FROM task
LEFT JOIN status ON task.status_id = status.id;


--9. Get the name of each status, along with a count of how many tasks have that status.
SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.id, status.name;


--10. Get the names of all statuses, sorted by the status with most tasks first.

SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id= task.status_id
GROUP BY status.id, status.name
ORDER BY task_count DESC;


--SQLPlay/Challenges--
--1. Count the tasks
SELECT COUNT(*) 
FROM task;


--2. Count tasks without valid due dates
SELECT COUNT(*)
FROM task
WHERE due_date IS NULL;


--3. Done tasks
SELECT *
FROM task
WHERE status_id= 3;

--4. Tasks not done

SELECT * 
FROM task 
WHERE status_id != 3;


--5. Tasks by creation date
SELECT *
FROM task
ORDER BY created DESC;


--6. Most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;


--7. Tasks mentioning database

SELECT title, due_date FROM task 
WHERE title 
LIKE '%database%' 
OR description 
LIKE '%database%';

--8. Task titles and IDs
SELECT id, title 
FROM task ORDER BY id ASC;



--9. Tasks in progress
SELECT id, title 
FROM task 
WHERE status_id = 2 
ORDER BY id ASC;;


--10. Tasks without due dates
SELECT id, title 
FROM task 
WHERE due_date 
IS NULL ORDER BY id ASC;

--11. Tasks alphabetically
SELECT *
FROM task
ORDER BY title ASC;


--12. Five highest task IDs
SELECT *
FROM task
ORDER BY id DESC
LIMIT 5;


--13. Unassigned tasks
SELECT *
FROM task
WHERE user_id 
IS NULL ORDER BY id ASC;


--14. Rename a task

UPDATE task 
SET title = 'Wash the laundry' 
WHERE id = 1;



--15. Mark a task done
UPDATE task
SET status_id = 3 
WHERE id = 22;



--16. Assign an unassigned task
UPDATE task 
SET user_id = 11 
WHERE id = 23;



--17. Set unassigned task status
UPDATE task
SET status_id= 
WHERE user_id IS NULL;


--18. Delete one task

DELETE FROM task 
WHERE id= 35;



--19. Remove one task tag

DELETE FROM task_tag
WHERE task_id = 1
AND tag_id= 2;


--20. Create task notes table
CREATE TABLE task_notes (
    id INTEGER PRIMARY KEY,
    task_id INTEGER NOT NULL,
    note TEXT,
    created DATETIME,
    FOREIGN KEY (task_id) REFERENCES task(id)
);
