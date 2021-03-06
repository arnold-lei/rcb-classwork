/* 2-JoinsRefresher
 * -/-/-/-/-/-/-/-/ */


// STUDENTS: HOW WOULD YOU ACCOMPLISH THESE JOINS?
// ===============================================

// Before anything, run the commands laid out in the schema.sql file


// 1. How would we grab every app in our database released for both Android and ios (using the string 'both', not the int 3)
// ===

SELECT app FROM apps LEFT JOIN os On apps.os_id=os.id WHERE os='both'



// 2. How would we grab only the app made by Apple (using Apple's name, not their id)
// ===


SELECT * FROM devs WHERE dev = 'Apple';

// 3. How would we display all app info except ids, including the name of the dev and the name of os

SELECT  FROM apps
// NOTE: THIS IS A HARD ONE
// ===
