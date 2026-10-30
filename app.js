async function start() {
  const [{ createServer }, { default: next }] = await Promise.all([
    import("node:http"),
    import("next"),
  ]);
  const port = Number.parseInt(process.env.PORT || "3000", 10);
  const hostname = "127.0.0.1";
  const app = next({ dev: false, hostname, port });
  const handle = app.getRequestHandler();

  await app.prepare();
  createServer((request, response) => handle(request, response)).listen(port, hostname);
  console.log(`Wenside is listening on ${hostname}:${port}`);
}

start().catch((error) => {
  console.error("Failed to start the Wenside Next.js server", error);
  process.exit(1);
});
