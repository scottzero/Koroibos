Started Readme
using Node with express framework and knex database
one-
setup node express application, installing all dependencies using npm
create an initial migration, setup knex configuration for database
import csv data into application and use copy method to
get data seeded into database for production
seeded database with
olympians-# \copy olympians (name,sex,age,height,weight,team,games,sport,event,medal) FROM 'data.csv' WITH DELIMITER ',' CSV HEADER;
-added dependencies for middle ware,
-finish file setup for routes,
- \c olympians to change into olympians database in psql
