# Travel Planner API Contract (Round 2 Demo)
> Version: v1 (demo)  
> Transport: HTTPS (recommended)  
> Auth: JWT in **HTTP-only cookie**  
> Client: Axios `withCredentials: true`

---

## Base URL

- **Local dev:** `http://localhost:5000/api/v1`
- **Demo/prod:** `https://<your-domain>/api/v1`

All paths below are **relative to Base URL**.

---

## Authentication Rules (HTTP-only Cookies)

### Cookie-based session
- After successful login/register, the server sets:
  - `Set-Cookie: accessToken=<JWT>; HttpOnly; Secure; SameSite=<Lax|None>; Path=/; Max-Age=<...>`
- The client must send cookies on every request:
  - Axios: `withCredentials: true`

### Auth-protected endpoints
Endpoints marked **(auth)** require a valid `accessToken` cookie.
If missing/invalid/expired → `401 Unauthorized`.

### CSRF note (demo scope)
Round 2 demo assumes cookie auth only. If `SameSite=None` is used (cross-site), introduce CSRF protection in a later round.

---

## Common Conventions

### Content Types
- Requests: `Content-Type: application/json` (unless specified)
- Responses: `application/json`

### IDs & timestamps
- `id`: string (UUID-like) for contract stability (DB may use INT later; keep as string at API boundary).
- `createdAt`, `updatedAt`: ISO 8601 strings.

### Pagination (if used)
- `page` (default `1`)
- `pageSize` (default `20`, max `100`)

---

## Standard Error Format (All Endpoints)

**Response (error)**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human readable summary",
    "details": [
      {
        "field": "email",
        "issue": "Invalid email format"
      }
    ],
    "requestId": "req_abc123"
  }
}
