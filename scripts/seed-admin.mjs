import Database from "better-sqlite3";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
if (!email || !password) {
  console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD before running npm run seed:admin");
  process.exit(1);
}

const dataDir = path.join(process.cwd(), "data");
fs.mkdirSync(dataDir, { recursive: true });
const dbPath = process.env.ADMIN_DB_PATH || path.join(dataDir, "admin.sqlite");
const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

const salt = crypto.randomBytes(16).toString("hex");
const digest = crypto.scryptSync(password, salt, 64).toString("hex");
const passwordHash = `${salt}:${digest}`;

db.prepare(`
  INSERT INTO admins (email, password_hash)
  VALUES (?, ?)
  ON CONFLICT(email) DO UPDATE SET
    password_hash = excluded.password_hash
`).run(email.trim().toLowerCase(), passwordHash);

db.close();
console.log(`Admin seeded in ${dbPath}`);
