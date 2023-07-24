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

  it("it should not be possible to create a transaction without date", async () => {
    const transaction = {
      title: "title",
      description: "description",
      value: 100,
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

  it("it should not be possible to create a transaction without type", async () => {
    const transaction = {
      title: "title",
      description: "description",
      value: 100,
      date: "2021-01-01",
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

  it("it should not be possible to create a transaction with invalid type", async () => {
    const transaction = {
      title: "title",
      description: "description",
      value: 100,
      date: "2021-01-01",
      type: "INVALID_TYPE",
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
    expect(response.body).toEqual({ message: "Invalid enum value. Expected 'INCOME' | 'EXPENSE', received 'INVALID_TYPE'" });
  });

  it("it should be possible to create a transaction", async () => {
    const transaction = {
      title: "title",
      description: "description",
      value: 100,
      date: "2023-07-24T13:46:28.083Z", //ISO 8601
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
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: "transação criada" });
  });
});
