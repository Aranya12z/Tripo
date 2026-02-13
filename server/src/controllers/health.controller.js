import { HTTP } from "../utils/constants.js";

export function healthCheck(_req, res) {
  res.status(HTTP.OK).json({ status: "ok" });
}
