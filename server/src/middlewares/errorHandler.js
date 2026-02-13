import { env } from "../config/env.js";
import { logger } from "../config/logger.js";
import { HTTP } from "../utils/constants.js";

export function errorHandler(err, req, res, _next) {
  const status = err.statusCode || HTTP.INTERNAL_SERVER_ERROR;

  const payload = {
    message: err.message || "Internal server error",
    requestId: req.id,
    ...(err.details ? { details: err.details } : {}),
    ...(env.isProd ? {} : { stack: err.stack }),
  };

  // Log full error always (but don’t leak stack to client in prod)
  logger.error(payload.message, {
    requestId: req.id,
    status,
    path: req.originalUrl,
    method: req.method,
    err,
  });

  res.status(status).json(payload);
}
