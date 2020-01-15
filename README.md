# Koroibos Challenge 
This is a Node Express api built to expose data from the 2016 Summer Olympics. It was issued as a 48 hour take home challenge by Turing School of Software and Design as the final module solo project. 

Status: Refactor

## Getting Started
- Production: https://boiling-depths-54207.herokuapp.com
- You can hit the endpoints in your browser 
- Postman can also be used to make requests: https://www.getpostman.com/

# For Developers: Testing
- For testing I used Jest with the following dependencies:
```
"babel-jest": "^24.9.0",
"jest": "^24.9.0",
"shelljs": "^0.8.3",
"supertest": "^4.0.2"
```
- To run tests:
```
$ knex migrate:latest --env test
$ npm test
```

- Clone down the repo and run the following commands: 

## database 

1. Create the database, run this in the CLI with psql installed:
```
$ psql
$ create database olympians;
$\q
```

2. We need to run the migrations to create the olympians table to store the data:
```
$ npm install
$ knex migrate:latest
```

You want to make sure your database gets populated properly, run the following commands in CLI:

```
$ psql
$ \c olympians
$ \copy olympians (name,sex,age,height,weight,team,games,sport,event,medal) FROM 'data.csv' WITH DELIMITER ',' CSV HEADER;
$select * from olympians; 
```

Your olympians table should now be populated, below is the schema output from our migration:

## Schema 

<img width="171" alt="Screen Shot 2020-01-15 at 7 57 08 AM" src="https://user-images.githubusercontent.com/33855435/72444133-ba4fa980-376c-11ea-8f0c-7379fc4743bd.png">



## Endpoints

1. Getting all olympians:
```
GET api/v1/olympians
```
```
//Response Format
{
  "olympians":
    [
      {
        "name": "Maha Abdalsalam",
        "team": "Egypt",
        "age": 18,
        "sport": "Diving"
        "total_medals_won": 0
      },
      {
        "name": "Ahmad Abughaush",
        "team": "Jordan",
        "age": 20,
        "sport": "Taekwondo"
        "total_medals_won": 1
      },
      {...}
    ]
}
```
2. Getting the youngest olympian: 
```
GET api/v1/olympians?age=youngest
```
```
//Response Format
{
  [
    {
      "name": "Ana Iulia Dascl",
      "team": "Romania",
      "age": 13,
      "sport": "Swimming"
      "total_medals_won": 0
    }
  ]
}

```
3.Getting the oldest olympian:
```
GET api/v1/olympians?age=oldest
```
```
//Response Format
{
  [
    {
      "name": "Julie Brougham",
      "team": "New Zealand",
      "age": 62,
      "sport": "Equestrianism"
      "total_medals_won": 0
    }
  ]
}
```
4. Getting olympian statistics: 
```
GET api/v1/olympian_stats
```
```
//Response format
  {
    "olympian_stats": {
      "total_competing_olympians": 3120
      "average_weight:" {
        "unit": "kg",
        "male_olympians": 75.4,
        "female_olympians": 70.2
      }
      "average_age:" 26.2
    }
  }
```
5. Getting olympian events: 
```
GET api/v1/events
```
```
//Response Format
{
  "events":
    [
      {
        "sport": "Archery",
        "events": [
          "Archery Men's Individual",
          "Archery Men's Team",
          "Archery Women's Individual",
          "Archery Women's Team"
        ]
      },
      {
        "sport": "Badminton",
        "events": [
          "Badminton Men's Doubles",
          "Badminton Men's Singles",
          "Badminton Women's Doubles",
          "Badminton Women's Singles",
          "Badminton Mixed Doubles"
        ]
      },
      {...}
    ]
}
```


## Core contriutor

- Scott Payton git: scottzero
