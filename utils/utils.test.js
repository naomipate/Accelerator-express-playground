const checkIsUpperCase = require("./stringUtils");
const supertest = require("supertest");
const app = require("../app");

describe("Checks if the string is entirely uppercase", () => {
  it("returns false if string is empty", () => {
    expect(checkIsUpperCase("")).toBe(false);
    // assert.strictEqual(checkIsUpperCase(""), "");
  });
  it("returns false if input is a number", () => {
    expect(checkIsUpperCase(2)).toBe(false);
  });
  it("returns true if all letters are uppercase and there are only letters", () => {
    expect(checkIsUpperCase("to be or NOT to be")).toBe(false);
    expect(checkIsUpperCase("THAT IS THE QUESTION")).toBe(false);
    expect(checkIsUpperCase("HAMLET")).toBe(true);
  });
});

describe("route that responds with capital username with no spaces", () => {
  it("responds with capital username", async () => {
    const response = await supertest(app).get("/users/capitalStudentName/1");
    expect(response.statusCode).toEqual(200);
    expect(response.text).toBe("INGABERGORTON");
  });
});

describe("route that responds with limited users or all users", () => {
  it("responds with >= 0 users", async () => {
    const response = await supertest(app).get("/users/");
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  it("responds with limited users", async () => {
    const response = await supertest(app).get("/users/?limit=10");
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(10);
  });
  it("responds with all users if limit query is a string", async () => {
    const response = await supertest(app).get("/users/?limit=banana");
    expect(response.statusCode).toEqual(200);
    expect(response.body.length > 1).toBe(true);
  });
});
