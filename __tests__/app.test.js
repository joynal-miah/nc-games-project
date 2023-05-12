const app = require("../app.js");
const request = require("supertest");
const db = require("../db/connection.js");
const seed = require("../db/seeds/seed.js");
const dataTest = require("../db/data/test-data/index.js");

beforeEach(() => {
  return seed(dataTest);
});

afterAll(() => {
  return db.end();
});

describe("GET /api", () => {
  it("should return the endpoints object", () => {
    return request(app)
      .get("/api")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
      });
  });
});

describe("/api/categories", () => {
  it("should return an array of objects if successfull, status 200", () => {
    return request(app)
      .get("/api/categories")
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body.categories)).toBe(true);
      });
  });

  it("should not be an empty array", () => {
    return request(app)
      .get("/api/categories")
      .then((response) => {
        expect(response.body.categories.length).not.toBe([]);
      });
  });

  it("should not be an empty object in the array", () => {
    return request(app)
      .get("/api/categories")
      .then((response) => {
        expect(response.body.categories).not.toHaveLength(0);
        for (const element of response.body.categories) {
          expect(element).toHaveProperty("slug");
          expect(element).toHaveProperty("description");
        }
      });
  });
});

describe("404 path not found", () => {
  it("should return a message if the url is invalid", () => {
    return request(app)
      .get("/api/nonsense")
      .expect(404)
      .then((response) => {
        expect(response.body.msg).toBe("error path not found");
      });
  });
});
