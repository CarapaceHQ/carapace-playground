import { createServer } from "node:http";

import { createCarapaceInspector } from "@carapacehq/express";
import {
  createRuleEvaluator,
  loadCoreRules,
} from "@carapacehq/detection-rules";
import { readJsonBody, sendJson } from "./json.js";

function listProtectedEvents(inspector) {
  return inspector
    .listEvents()
    .filter((event) => !event.actor?.path?.startsWith("/inspect"));
}

function buildSummary(inspector) {
  const events = listProtectedEvents(inspector);
  const eventCounts = events.reduce((counts, event) => {
    counts[event.type] = (counts[event.type] || 0) + 1;
    return counts;
  }, {});

  return {
    eventCounts,
    latestDecision: inspector.getLatestOutcome(),
    totalEvents: events.length,
  };
}

function createRouteHandler(inspector) {
  return async function handleRoute(req, res) {
    if (req.method === "GET" && req.url === "/health") {
      sendJson(res, 200, { ok: true, service: "carapace-playground" });
      return;
    }

    if (req.method === "GET" && req.url === "/inspect/events") {
      sendJson(res, 200, { events: inspector.listEvents() });
      return;
    }

    if (req.method === "GET" && req.url === "/inspect/summary") {
      sendJson(res, 200, buildSummary(inspector));
      return;
    }

    if (req.method === "POST" && req.url === "/inspect/reset") {
      inspector.clearEvents();
      sendJson(res, 200, { ok: true, cleared: true });
      return;
    }

    if (req.method === "GET" && req.url === "/v1/search") {
      sendJson(res, 200, {
        ok: true,
        results: ["pricing", "roadmap", "policy"],
      });
      return;
    }

    if (req.method === "GET" && req.url === "/v1/admin") {
      sendJson(res, 401, {
        error: "Authentication required.",
      });
      return;
    }

    if (req.method === "GET" && req.url === "/v1/internal") {
      sendJson(res, 200, {
        ok: true,
        config: "internal-preview",
      });
      return;
    }

    if (req.method === "GET" && req.url === "/v1/config") {
      sendJson(res, 200, {
        ok: true,
        featureFlags: ["telemetry", "demo"],
      });
      return;
    }

    if (req.method === "POST" && req.url === "/v1/tools/execute") {
      const body = req.body || {};
      sendJson(res, 200, {
        ok: true,
        received: body,
      });
      return;
    }

    if (req.method === "POST" && req.url === "/v1/chat") {
      const body = req.body || {};
      sendJson(res, 200, {
        ok: true,
        summary:
          "Sermon Studio can turn one sermon into a weekly media packet.",
        received: body,
      });
      return;
    }

    sendJson(res, 404, {
      error: "Not found.",
      path: req.url,
    });
  };
}

export function createDemoHandler(inspector = createCarapaceInspector({
  evaluateEvents: createRuleEvaluator({ rules: loadCoreRules() }),
})) {
  const route = createRouteHandler(inspector);

  const handler = async (req, res) => {
    req.path = req.url?.split("?")[0] || "/";
    req.body = req.body ?? (await readJsonBody(req));

    inspector.middleware(req, res, async () => {
      await route(req, res);
    });
  };

  return {
    handler,
    inspector,
  };
}

export function createDemoApp() {
  const { handler, inspector } = createDemoHandler();

  const server = createServer(handler);

  return {
    handler,
    server,
    inspector,
  };
}
