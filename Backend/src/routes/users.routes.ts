import { Router } from "express";
import { pool } from "@database/db";

const router = Router();

export default () => {
  router.get("/users", async (_req, res) => {
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT * FROM users");
      res.json(result.rows);
    } catch (err) {
      console.error("Database query error:", err);
      res.status(500).json({ error: "Database query failed" });
    } finally {
      client.release();
    }
  });

  router.get("/users/:id", (req, res) => {
    res.send(`obteniendo al usuario con id: ${req.params.id}`);
    console.log("GET /users/:id");
  });

  router.post("/users", (_req, res) => {
    res.send("creando usuario");
    console.log("POST /users");
  });

  router.put("/users/:id", (req, res) => {
    res.send(`actualizando usuario con id: ${req.params.id}`);
    console.log("PUT /users/:id");
  });

  router.delete("/users/:id", (req, res) => {
    res.send(`eliminando usuario con id: ${req.params.id}`);
    console.log("DELETE /users/:id");
  });

  return router;
};
