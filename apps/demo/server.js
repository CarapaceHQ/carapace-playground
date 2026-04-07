import { createDemoApp } from "./src/app.js";

const port = Number(process.env.PORT || 4421);
const { server } = createDemoApp();

server.listen(port, () => {
  console.log(`Carapace playground listening on http://127.0.0.1:${port}`);
  console.log(
    "Try npm run scenario:normal, npm run scenario:suspicious, or inspect /inspect/events and /inspect/summary.",
  );
});
