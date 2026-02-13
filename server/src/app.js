import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import hpp from "hpp";

import { corsOptions } from "./config/cors.js";
import { env } from "./config/env.js";
import { logger } from "./config/logger.js";

import routes from "./routes/index.js";
import { apiRateLimiter } from "./middlewares/rateLimiter.js";
import { requestId } from "./middlewares/requestId.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export function createApp() {
  const app = express();

  app.set("trust proxy", 1);

  app.use(requestId);

  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" }, // helpful for uploads/static if needed
    })
  );

  app.use(cors(corsOptions));
  app.options("*", cors(corsOptions));

  app.use(apiRateLimiter);
  app.use(hpp());
  app.use(compression());
  app.use(cookieParser());

  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: false, limit: "1mb" }));

  // Minimal request logging (avoid noisy in prod)
  app.use((req, _res, next) => {
    if (!env.isProd) {
      logger.debug("HTTP", { method: req.method, path: req.originalUrl, requestId: req.id });
    }
    next();
  });

  app.use("/api", routes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
