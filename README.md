# carapace-playground

Local demo environment for watching Carapace telemetry, detections, and policy outcomes in a small reference app.

Support Carapace on Patreon: <https://www.patreon.com/carapacehq>

## Purpose

This repo exists to make the first Carapace promise visible:

1. an API receives traffic
2. middleware emits telemetry
3. local rules score behavior
4. operators can inspect what happened and why

## Seed Material

The initial demo docs in `docs/` came from the earlier `ai-trust-layer` concept work:

- `docs/DEMO.md`
- `docs/Killer-Demo.md`

## Near-Term Milestones

1. Stand up a tiny Express app with normal and suspicious request scripts.
2. Wire `@carapacehq/express` and the starter rule pack into that app.
3. Provide one local inspection path that explains emitted detections and policy actions.

## Development

```bash
npm run dev
```

Then drive the two first-slice traffic patterns:

```bash
npm run scenario:normal
npm run scenario:suspicious
```

The demo exposes:

- `GET /inspect/events` for raw emitted telemetry
- `GET /inspect/summary` for score, flags, reasons, and event counts

The suspicious scenario intentionally stacks multiple rule hits so operators can see why the recommendation escalates from benign traffic to blocking behavior.

## License

Apache-2.0
