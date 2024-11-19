import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// DB connection setup
export const pool = new pg.Pool({
  user: "postgres",
  host: "127.0.0.1",
  password: "0224",
  database: "MediConnect",
  port: 5432,
});
