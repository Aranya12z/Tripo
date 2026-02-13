import { PrismaClient } from "@prisma/client";
import { env } from "./env.js";
import { logger } from "./logger.js";

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: env.isProd ? ["error", "warn"] : ["error", "warn"],
  });

if (!env.isProd) globalForPrisma.prisma = prisma;

process.on("beforeExit", async () => {
  try {
    await prisma.$disconnect();
  } catch (e) {
    logger.error("Prisma disconnect failed", { err: e });
  }
});
