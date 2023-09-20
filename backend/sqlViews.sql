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
    j.users_userId = u.userId;


CREATE VIEW StartupsWithBootcamps AS
SELECT
    s.startupId AS StartupId,
    s.name AS StartupName,
    s.description AS StartupDescription,
    b.bootcampId AS BootcampId,
    b.name AS BootcampName,
    b.type AS BootcampType,
    b.duration AS BootcampDuration
FROM
    startups s
LEFT JOIN
    bootcamps b
ON
    s.startupId = b.startups_startupId;