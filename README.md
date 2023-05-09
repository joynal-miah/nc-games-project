#how to set up the .env files
 
We'll have two databases in this project. One for real looking dev data and another for simpler test data.

You will need to create two .env files for your project: .env.test and .env.development. Into each, add 
PGDATABASE=<database_name_here>, with the correct database name for that environment (see /db/setup.sql for the database names). Double check that these .env files are .gitignored.

You'll need to run npm install at this point - Please do not install specific packages as you can do this down the line when you need them.

You have also been provided with a db folder with some data, a setup.sql file and a seeds folder.