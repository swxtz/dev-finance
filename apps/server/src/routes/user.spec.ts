
import request from "supertest";
import { describe, it,  expect } from "vitest";
import { app } from "../server";

describe("POST /user", () => {
  it("should not be possible to create a user without name", async () => {
    const data = {
      "name": "",
      "email": "jonh.doe@example.com",
      "password": "superpassword"
    };

    const response = await request(app.server).post("/user").send(data);
    expect(response.statusCode).toBe(400);
  });

  it("should not be possible to create a user without e-mail", async () => {
    const data = {
      "name": "Jonh Doe",
      "email": "",
      "password": "superpassword"
    };

    const response = await request(app.server).post("/user").send(data);
    expect(response.statusCode).toBe(400);
  });
  
  it("it should not be possible to create a user without a password", async () => {
    const data = {
      "email": "jonh.doe@example.com",
      "name": "Jonh Doe",
      "password": ""
    };

    const response = await request(app.server).post("/user").send(data);
    expect(response.statusCode).toBe(400);
  });

  it.skip("it should not be possible to create a user without a password", async () => {
    const data = {
      "email": "jonh.doe@example.com",
      "name": "Jonh Doe",
      "password": "superpassword"
    };

    const response = await request(app.server).post("/user").send(data);
    expect(response.statusCode).toBe(201);
  }, 10000);

});