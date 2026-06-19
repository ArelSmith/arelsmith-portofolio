import path from "path";
import { defineConfig, type ViteDevServer, type Connect } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import type { IncomingMessage, ServerResponse } from "http";

function imageUploadPlugin() {
  return {
    name: "image-upload-plugin",
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
        if (req.url === "/api/upload" && req.method === "POST") {
          let body = "";
          req.on("data", (chunk: string) => {
            body += chunk;
          });
          req.on("end", () => {
            try {
              const { base64 } = JSON.parse(body);
              const base64Data = base64.split(";base64,").pop();
              const buffer = Buffer.from(base64Data, "base64");

              const today = new Date();
              const dateString = today.toISOString().split("T")[0]; // YYYY-MM-DD
              const randomStr = Math.random().toString(36).substring(2, 10);
              const newFilename = `${randomStr}_${dateString}.webp`;

              const targetDir = path.resolve(__dirname, "./public/images");
              if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
              }

              const targetPath = path.join(targetDir, newFilename);
              fs.writeFileSync(targetPath, buffer);

              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ url: `/images/${newFilename}` }));
            } catch (err) {
              const error = err as Error;
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ error: error.message }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), imageUploadPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: process.env.VITE_BASE_PATH || "/",
});
