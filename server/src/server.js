import http from "http";
import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./config/logger.js";
import { prisma } from "./config/prisma.js";

async function start() {
  // quick DB connectivity check (no business logic)
  await prisma.$queryRaw`SELECT 1`;

  const app = createApp();
  const server = http.createServer(app);

  server.listen(env.PORT, () => {
    logger.info(`Server running on port ${env.PORT} (${env.NODE_ENV})`);
  });

  const shutdown = async (signal) => {
    logger.info(`Received ${signal}. Shutting down...`);
    server.close(async () => {
      try {
        await prisma.$disconnect();
      } finally {
        process.exit(0);
      }
    });
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

start().catch((err) => {
  logger.error("Startup failure", { err });
  process.exit(1);
});
