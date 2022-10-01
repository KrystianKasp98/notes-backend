import app from "../src/app";
import * as request from "supertest";
import {expect, describe, it} from "@jest/globals";

describe("app", () => {
  it("should return a successful response for GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});
