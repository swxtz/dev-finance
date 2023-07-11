import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../../server";
describe("POST /auth/user", () => {
  it("should be able to authenticate", async () => {
    const data = {
      email: "john.doe@example.com",
      password: "superPassword",
    };

    const response = await request(app.server).post("/auth/user").send(data);

    expect(response.statusCode).toBe(200);
  });

  it("should not be possible to authenticate without a password", async () => {
    const data = {
      email: "john.doe@example.com",
      password: "",
    };

    const response = await request(app.server).post("/auth/user").send(data);

    expect(response.statusCode).toBe(400);
  });

  it("should not be possible to authenticate without a email", async () => {
    const data = {
      email: "",
      password: "superPassword",
    };

    const response = await request(app.server).post("/auth/user").send(data);

    expect(response.statusCode).toBe(400);
  });

  it("should not be possible to authenticate without a email and password", async () => {
    const data = {
      email: "",
      password: "",
    };

    const response = await request(app.server).post("/auth/user").send(data);

    expect(response.statusCode).toBe(400);
  });
});
