# Koroibos Challenge 
Our company is currently working to build a live Olympic Analytics tracker for the 2020 Summer Games. As part of our application, we want to include historical data from the 2016 Summer Olympics.

## Getting Started
- Production: https://boiling-depths-54207.herokuapp.com
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
