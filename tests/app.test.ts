import app from "../src/app";
import * as request from "supertest";
import {expect, describe, it} from "@jest/globals";

describe("app", () => {
  it("Id server works", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});

describe("/notes route", () => {
  it("find all", async () => {
    const res = await request(app).get("/notes");
    expect(res.statusCode).toEqual(200);
  });

  it("find by id", async () => {
    const res = await request(app).get("/notes/633960de3ff61ca627fc7827");
    expect(res.statusCode).toEqual(200);
  });
});
