const baseUrl = process.env.CARAPACE_BASE_URL || "http://127.0.0.1:4421";

async function request(path, options) {
  const response = await fetch(`${baseUrl}${path}`, options);
  const payload = await response.json();

  return {
    headers: Object.fromEntries(response.headers.entries()),
    payload,
    status: response.status,
  };
}

await request("/inspect/reset", { method: "POST" });

const chat = await request("/v1/chat", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    message: "Summarize this sermon into a weekly newsletter draft.",
  }),
});

const summary = await request("/inspect/summary");

console.log(
  JSON.stringify(
    {
      scenario: "normal",
      chat,
      summary: summary.payload,
    },
    null,
    2,
  ),
);
