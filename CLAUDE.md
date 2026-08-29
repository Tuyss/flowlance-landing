# flowlance-landing — Claude Code instructions

## Preview workflow (MANDATORY for all landing page changes)

**Never commit directly to `main`.** Main is connected to Vercel production (flowlance.com.br) — changes to main go live immediately for real visitors.

### Standard workflow:
1. Create a feature branch: `git checkout -b feature/<description>`
2. Make all changes on the branch
3. Push branch: `git push origin feature/<description>`
4. Vercel auto-creates a preview deployment for every non-main branch push. The preview URL appears in the Vercel dashboard and in the GitHub PR checks. Report this URL to Arthur.
5. Arthur reviews the preview, then explicitly asks to merge to main.
6. **Do NOT merge to main** unless Arthur explicitly says so in the same session.

### Why this matters:
flowlance.com.br has real traffic. A broken CSS edit or accidental section removal goes live instantly when pushed to main. The branch + preview pattern gives a zero-risk review step before any change reaches visitors.

## Repository structure

Static HTML site — no build step, no framework.
- `index.html` — the entire landing page (one file)
- `public/` — images and assets
- `vercel.json` — Vercel routing config

## Screenshot assets (added Aug 2026)

Real app screenshots in `public/`:
- `Proposta.png` through `Proposta5.png` — full client proposal journey (5 steps)
- `Dashboard.png`, `Clientes.png`, `Relatorios.png`, `Reuniões.png` — desktop app screenshots (use `.ss-browser` frame)
- `Cobrança.png` — mobile portrait screenshot (use `.ss-phone` frame)
- `Contratos1.png` — contract page (use `.ss-browser` frame)

Note: `Cobrança.png` and `Reuniões.png` contain UTF-8 characters. Use URL-encoded paths in HTML `src` attributes: `Cobran%C3%A7a.png` and `Reuni%C3%B5es.png`.
