import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";
import { HTTP } from "../utils/constants.js";

export function validate(req, _res, next) {
  const result = validationResult(req);
  if (result.isEmpty()) return next();

  const details = result.array().map((e) => ({
    field: e.path,
    message: e.msg,
  }));

  next(new ApiError(HTTP.BAD_REQUEST, "Validation failed", details));
}
