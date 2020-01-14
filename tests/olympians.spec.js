var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');
var playlists = require('../routes/api/v1/olympians');
const Pojo = require('../models/olympian_pojo');
const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

describe('Test GET /api/v1/olympians path', () => {
    it('sad path, no olympians in test db', async () => {
      await database.raw('truncate table olympians cascade');
      const res = await request(app).get("/api/v1/olympians");
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("No olympians seeded in db.");
    });
  });

  describe('Test GET /api/v1/olympians path', () => {
      it('happy path, we made one olympian', async () => {
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
