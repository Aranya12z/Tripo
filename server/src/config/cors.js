import { env } from "./env.js";

export const corsOptions = Object.freeze({
  origin(origin, cb) {
    // Allow same-origin / server-to-server calls (no Origin header)
    if (!origin) return cb(null, true);

    if (origin === env.CLIENT_URL) return cb(null, true);
    return cb(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "X-Request-Id",
  ],
  exposedHeaders: ["X-Request-Id"],
  maxAge: 86400,
});
