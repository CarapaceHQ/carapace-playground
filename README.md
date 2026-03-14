# carapace-playground

Local demo environment for watching Carapace telemetry, detections, and policy outcomes in a small reference app.

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

That command is a placeholder today until the first local demo app lands.

## License

Apache-2.0
