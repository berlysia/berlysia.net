import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  // Two-pass build: the client pass emits island scripts and CSS into dist/
  // (with a manifest), then the SSG pass renders HTML that references them.
  if (mode === "client") {
    return {
      plugins: [client({ input: ["/app/client.ts", "/app/style.css"] })],
    };
  }
  return {
    server: { port: 3000, strictPort: true },
    build: { emptyOutDir: false },
    plugins: [
      honox({ client: { input: ["/app/client.ts", "/app/style.css"] } }),
      ssg({ entry }),
    ],
  };
});
