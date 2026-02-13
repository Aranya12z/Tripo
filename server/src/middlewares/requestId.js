import crypto from "crypto";

export function requestId(req, res, next) {
  const incoming = req.get("X-Request-Id");
  const id = incoming || crypto.randomUUID();
  req.id = id;
  res.setHeader("X-Request-Id", id);
  next();
}
