# Epic Tech AI Agent Army — API & Integration Guide

This is your hub for:
- Plugin hooks and component API for in-app labs/divisions
- External integrations (future: webhooks, cloud/open API links)
- Adding user-supplied (BYOK) keys for model endpoints

---

## Lab Division Props

Each lab (component) can declare props:
- `inputs`: array of prompt fields
- `outputs`: description or format preview (text, art, JSON, etc.)
- `example`: optional static/demo output
- Ability to accept a `userApiKey` or `serverUrl` for "bring your own model"

---

## Planned API Examples

### GET `/api/status`
Returns health/status of army, count of plugins loaded.

### POST `/api/remix`
Accepts a prompt object, returns a combined creative output (where multiple labs are chained).

### POST `/api/art`
(Optional) Accepts art/text prompt, links to free API or OSS backend.

---

## Adding a Custom API

- Add API routes in `/app/api/` (Next.js App Router style)
- Prefer stateless; proxy any user keys securely from client if needed

---

## BYOK Instructions

- User keys (OpenAI, HuggingFace, Replicate, Stability) are entered in browser
- App stores securely (session/local only, never server-side)
- Labs should gracefully degrade to browser-native or free model when key/rate-limit is hit

---

Keep this up-to-date as the Agent Army ecosystem evolves!
