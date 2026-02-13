import dotenv from "dotenv";

dotenv.config();

const required = [
  "NODE_ENV",
  "PORT",
  "CLIENT_URL",
  "DATABASE_URL",
  "JWT_SECRET",
];

for (const key of required) {
  if (!process.env[key]) {
    // Fail fast: misconfigured env should never boot
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const NODE_ENV = process.env.NODE_ENV;

export const env = Object.freeze({
  NODE_ENV,
  isProd: NODE_ENV === "production",
  isDev: NODE_ENV !== "production",
  PORT: Number(process.env.PORT),
  CLIENT_URL: process.env.CLIENT_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
});
