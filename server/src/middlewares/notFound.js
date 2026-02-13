import { ApiError } from "../utils/ApiError.js";
import { HTTP } from "../utils/constants.js";

export function notFound(req, _res, next) {
  next(
    new ApiError(
      HTTP.NOT_FOUND,
      `Route not found: ${req.method} ${req.originalUrl}`,
    ),
  );
}
