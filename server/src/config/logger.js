import winston from "winston";
import { env } from "./env.js";

const { combine, timestamp, errors, json, printf, colorize } = winston.format;

const devFormat = printf(({ level, message, timestamp, ...meta }) => {
  const rest = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : "";
  return `${timestamp} ${level}: ${message}${rest}`;
});

export const logger = winston.createLogger({
  level: env.isProd ? "info" : "debug",
  format: combine(
    timestamp(),
    errors({ stack: true }),
    env.isProd ? json() : combine(colorize(), devFormat)
  ),
  transports: [new winston.transports.Console()],
});
