import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../../server";

describe("POST /transactions", async () => {
  it("it should not be possible to create a transaction without title", async () => {
    const transaction = {
      description: "description",
      value: 100,
      date: "2021-01-01",
      type: "EXPENSE",
    };

    const jonh = {
      email: "jonh.doe@example.com",
      password: "superPassword",
    };

    const token = await request(app.server).post("/auth/user").send(jonh);

    const response = await request(app.server)
      .post("/transactions")
      .send(transaction)
      .set("Authorization", `Bearer ${token.body.token}`);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "Required" });
  });

  it("it should not be possible to create a transaction without description", async () => {
    const transaction = {
      title: "title",
      value: 100,
      date: "2021-01-01",
      type: "EXPENSE",
    };

    const jonh = {
      email: "jonh.doe@example.com",
      password: "superPassword",
    };

    const token = await request(app.server).post("/auth/user").send(jonh);

    const response = await request(app.server)
      .post("/transactions")
      .send(transaction)
      .set("Authorization", `Bearer ${token.body.token}`);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "Required" });
  });

  it("it should not be possible to create a transaction without value", async () => {
    const transaction = {
      title: "title",
      description: "description",
      date: "2021-01-01",
      type: "EXPENSE",
    };

    const jonh = {
      email: "jonh.doe@example.com",
      password: "superPassword",
    };

    const token = await request(app.server).post("/auth/user").send(jonh);

    const response = await request(app.server)
      .post("/transactions")
      .send(transaction)
      .set("Authorization", `Bearer ${token.body.token}`);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "Required" });
  });
});
