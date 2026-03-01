# Epic Tech AI Agent Army — Plugins & Extensions

Want to expand the Agent Army?
Here's how to add or suggest new creative tools, open-model integrations, or workflow blocks.

---

## 1. Component PRs

- Build a new lab/division as a React component in `/app/components/`
- Use open/free APIs or browser-native libraries whenever possible
- For LLM/image/audio models: prefer BYOK (user-supplied key/server) *or* local runtime

---

## 2. Plugin API (Planned)

🌀 Planned: `/plugins/` system for quick drop-in of custom labs/blocks via manifest.

- Describe your lab’s input/output, dependencies, and core function
- Submit a manifest and simple React/JSX view
- No restrictions: music, text, art, code, remix flows, data gadgets

---

## 3. Examples

- `Text2ArtLab.tsx` — take prompt, hit Craiyon API, display + download art
- `FirefoxTTSLab.tsx` — TTS using browser speech synthesis (no server)
- `CollabWhiteboardLab.tsx` — PeerJS/Yjs collaborative canvas, zero backend

---

## 4. Submit

- Open a PR with your lab/plugin in `/app/components/`
- Include usage in `/docs/README.md` AND a demo on a `/lab/` route if it’s big

---

The Agent Army grows as the open AI universe grows. All creators welcome!
