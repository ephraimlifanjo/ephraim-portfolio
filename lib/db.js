import Database from "better-sqlite3";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";

let database;

function databasePath() {
  if (process.env.ADMIN_DB_PATH) return path.resolve(process.env.ADMIN_DB_PATH);
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return path.join(os.tmpdir(), "ephraim-portfolio-admin.sqlite");
  }
  return path.join(process.cwd(), "data", "admin.sqlite");
}

export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password, stored) {
  const [salt, expectedHex] = String(stored || "").split(":");
  if (!salt || !expectedHex) return false;
  const actual = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(expectedHex, "hex");
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

export function getDb() {
  if (database) return database;

  const dbPath = databasePath();
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  database = new Database(dbPath);
  database.pragma("journal_mode = WAL");
  database.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const count = database.prepare("SELECT COUNT(*) AS count FROM admins").get().count;
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;

  if (count === 0 && email && password) {
    database
      .prepare("INSERT INTO admins (email, password_hash) VALUES (?, ?)")
      .run(email, hashPassword(password));
  }

  return database;
}

export function findAdminByEmail(email) {
  return getDb()
    .prepare("SELECT id, email, password_hash FROM admins WHERE email = ?")
    .get(String(email).trim().toLowerCase());
}
