
--------------------------------
-- Judges with users view
-------------------------------
CREATE VIEW JudgeView AS
SELECT
    j.juryId AS JudgeId,
    j.description AS JudgeDescription,
    u.userId AS UserId,
    u.name AS UserName,
    u.username AS UserUsername,
    u.role AS UserRole
FROM
    jury j
JOIN
    users u
ON
    j.users_userId = u.userId
WHERE
    u.role = 'J';



--------------------------------
-- Bootcamp with startups view
-------------------------------
CREATE VIEW bootcamp_startups_view AS
SELECT
    b.bootcampId,
    b.name AS bootcamp_name,
    b.type AS bootcamp_type,
    b.year AS bootcamp_year,
    s.startupId,
    s.name AS startup_name,
    s.description AS startup_description,
    s.created_at AS startup_created_at,
    s.updated_at AS startup_updated_at
FROM
    jmstest.bootcamps AS b
LEFT JOIN
    jmstest.startups AS s
ON
    b.bootcampId = s.bootcamps_bootcampId;
