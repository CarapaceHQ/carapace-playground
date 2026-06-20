# carapace-playground

Local demo environment for watching Carapace telemetry, detections, and policy outcomes in a small reference app.

Support Carapace on Patreon: <https://www.patreon.com/carapacehq>

## Purpose

This repo exists to make the first Carapace promise visible:

1. an API receives traffic
2. middleware emits telemetry
3. local rules score behavior
4. operators can inspect what happened and why

## Source Material

The initial demo docs in `docs/` came from the earlier `ai-trust-layer` concept work:

- `docs/DEMO.md`
- `docs/Killer-Demo.md`

## Current Demo Loop

The first local loop is implemented:

1. a tiny API receives normal or suspicious traffic
2. `@carapacehq/express` emits telemetry and policy actions
3. `@carapacehq/detection-rules` scores the event sequence
4. inspection endpoints explain score, flags, reasons, action, and receipt evidence

## Development

The current pre-publish playground expects the Carapace package repos to be checked out as siblings:

```text
workspace/
  carapace-js/
  carapace-detection-rules/
  carapace-playground/
```

Install the local package links from `carapace-playground`:

```bash
npm install
```

Start the demo API:

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
- `GET /inspect/summary` for score, flags, reasons, event counts, and the latest receipt
- `GET /inspect/receipts` for agent action receipts

The suspicious scenario intentionally stacks multiple rule hits so operators can see why the recommendation escalates from benign traffic to blocking behavior.
The receipt output is the copyable evidence artifact for that decision.

## Local Package Links

The playground consumes the first Carapace packages through local `file:` dependencies:

- `@carapacehq/express`
- `@carapacehq/detection-rules`

That keeps the demo close to the real install path while avoiding a publish requirement during release-candidate work.

Before package publication, the same flow should be smoke-tested against packed tarballs in a fresh local app from `carapace-steering`:

```bash
./scripts/verify-packed-install.sh
```

## License

Apache-2.0
