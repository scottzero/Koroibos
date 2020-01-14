var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');
var playlists = require('../routes/api/v1/olympians');
const Pojo = require('../models/olympian_pojo');
const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

// -----------------------------------
// SAD PATH NO OLYMPIAN IN DATABASE
// ------------------------------------

describe('Test GET /api/v1/olympians path', () => {
    it('sad path, no olympians in test db', async () => {
      await database.raw('truncate table olympians cascade');
      const res = await request(app).get("/api/v1/olympians");
      expect(res.statusCode).toBe(404);
      expect(res.body.message).toBe("No olympians seeded in db.");
    });
  });

// -----------------------------------
// HAPPY PATH OLYMPIAN IN DATABASE
// ----------------------------------

  describe('Test GET /api/v1/olympians path', () => {
      it('happy path, we made one olympian', async () => {
        await database.raw('truncate table olympians cascade');

        let olympian = {
         id: 1,
         name: 'scott',
         sex: 'M',
         age: 27,
         height: 90,
         weight: 190,
         team: "na",
         games: "na",
         sport: "na",
         event: "na",
         medal: "na"
       };
       const expected = {
         name: 'scott',
         sex: 'M',
         age: 27,
         height: 90,
         weight: 190,
         team: "na",
         games: "na",
         sport: "na",
         event: "na",
         medal: "na"
       };
      await database('olympians').insert(olympian, 'id');
        const res = await request(app).get("/api/v1/olympians");
        expect(res.statusCode).toBe(200);
        expect(res.body[0]).toEqual(expected);
  });
});

// -----------------------------------
// HAPPY PATH YOUNGEST OLYMPIAN IN DATABASE
//------------------------------------

describe('Test GET /api/v1/olympians?age=youngest path', () => {
    it('happy path, we should get oldest', async () => {
      await database.raw('truncate table olympians cascade');

      let olympian1 = {
       id: 3,
       name: 'scott',
       sex: 'M',
       age: 27,
       height: 90,
       weight: 190,
       team: "na",
       games: "na",
       sport: "na",
       event: "na",
       medal: "na"
     };
     let olympian2 = {
      id: 4,
      name: 'barb',
      sex: 'M',
      age: 69,
      height: 90,
      weight: 190,
      team: "na",
      games: "na",
      sport: "na",
      event: "na",
      medal: "na"
    };
     const expected = {
       name: 'scott',
       sex: 'M',
       age: 27,
       team: "na",
       sport: "na",
       medal: "na"
     };
     const expected2 = {
       name: 'barb',
       sex: 'M',
       age: 69,
       team: "na",
       sport: "na",
       medal: "na"
     };
    await database('olympians').insert(olympian1, 'id');
    await database('olympians').insert(olympian2, 'id');
    const res = await request(app).get("/api/v1/olympians?age=youngest");
    expect(res.statusCode).toBe(200);
    expect(res.body[0]).toEqual(expected);
    const res2 = await request(app).get("/api/v1/olympians?age=oldest");
    expect(res2.statusCode).toBe(200);
    expect(res2.body[0]).toEqual(expected2);
    });
});


// -----------------------------------
// SAD PATH YOUNGEST OLYMPIAN IN DATABASE
//------------------------------------
describe('Test GET /api/v1/olympians?age=youngest path', () => {
    it('sad path, no olympians in test db', async () => {
      await database.raw('truncate table olympians cascade');
      const res = await request(app).get("/api/v1/olympians?age=youngest");
      expect(res.statusCode).toBe(404);
      expect(res.body.message).toBe("Could not find youngest olympian. Probably none in the db.");
  });
});
// -----------------------------------
// SAD PATH OLDEST OLYMPIAN IN DATABASE
//------------------------------------
describe('Test GET /api/v1/olympians?age=oldest path', () => {
    it('sad path, no olympians in test db', async () => {
      await database.raw('truncate table olympians cascade');
      const res = await request(app).get("/api/v1/olympians?age=oldest");
      expect(res.statusCode).toBe(404);
      expect(res.body.message).toBe("Could not find oldest olympian. Probably none in the db.");
  });
});
// -----------------------------------
// SAD PATH OLYMPIAN STATS
//------------------------------------
describe('Test GET /api/v1/olympian_stats path', () => {
    it('sad path, no olympians stats in test db', async () => {
      await database.raw('truncate table olympians cascade');
      const res = await request(app).get("/api/v1/olympian_stats");
      expect(res.statusCode).toBe(500);
  });
});
// -----------------------------------
// HAPPY PATH OLYMPIAN STATS
//------------------------------------
describe('Test GET /api/v1/olympian_stats path', () => {
    it('happy path, olympian stats in test db', async () => {
      let olympian1 = {
       id: 3,
       name: 'scott',
       sex: 'M',
       age: 27,
       height: 90,
       weight: 190,
       team: "na",
       games: "na",
       sport: "na",
       event: "na",
       medal: "na"
     };
     let olympian2 = {
      id: 4,
      name: 'barb',
      sex: 'F',
      age: 69,
      height: 90,
      weight: 190,
      team: "na",
      games: "na",
      sport: "na",
      event: "na",
      medal: "na"
    };
    let expected ={
    "olympian_stats": {
        "total_competing_olympians": 2,
        "average_weight": {
            "unit": "kg",
            "male_olympians": null,
            "female_olympians": null
        },
        "average_age": 48
      }
    };
      const res = await request(app).get("/api/v1/olympian_stats");
      expect(res.statusCode).toBe(200);
      expect(res.body[0]).toEqual(expected);
  });
});
