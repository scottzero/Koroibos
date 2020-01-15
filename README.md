# Koroibos Challenge 
This is Node Express api built to expose data from the 2016 Summer Olympics. 

## Getting Started
- Production: https://boiling-depths-54207.herokuapp.com
- You can hit the endpoints in your browser 
- Postman can also be used to make requests: https://www.getpostman.com/

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
# For Developers: Testing
- For testing I used Jest with the following dependencies:
```
"babel-jest": "^24.9.0",
"jest": "^24.9.0",
"shelljs": "^0.8.3",
"supertest": "^4.0.2"
```

- Clone down the repo and run the following commands: 
```
$ npm install
$ knex migrate:latest
$ knex migrate:latest --env test
$ npm test
```

## Core contriutor

- Scott Payton git: scottzero
