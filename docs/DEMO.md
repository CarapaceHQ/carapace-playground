# Demo Runbook

The first Carapace demo is intentionally narrow and local-first.

It proves this loop:

1. an API receives traffic
2. `@carapacehq/express` emits normalized events
3. the starter rule pack evaluates the event stream locally
4. Carapace returns `score`, `flags`, `reasons`, and `action`
5. the operator inspects `/inspect/events` or `/inspect/summary`

## Start The Demo

```bash
npm run dev
```

The demo API listens on `http://127.0.0.1:4421` by default.

## Run Normal Traffic

```bash
npm run scenario:normal
```

Expected result:

- `x-carapace-action: allow`
- `x-carapace-score: 0`
- emitted events include `api_request` and `policy_action`

## Run Suspicious Traffic

```bash
npm run scenario:suspicious
```

Expected result:

- the final request is blocked with HTTP `429`
- the inspection summary shows stacked flags such as `prompt_injection`, `proxy_source`, and `endpoint_enumeration`
- the final recommendation is `block`

## Inspection Endpoints

- `GET /inspect/events`: raw event stream
- `GET /inspect/summary`: event counts and latest policy decision
- `POST /inspect/reset`: clear local demo state
