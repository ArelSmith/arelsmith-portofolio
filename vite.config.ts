import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";

function imageUploadPlugin() {
  return {
    name: "image-upload-plugin",
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url === "/api/upload" && req.method === "POST") {
          let body = "";
          req.on("data", (chunk: string) => {
            body += chunk;
          });
          req.on("end", () => {
            try {
              const { filename, base64 } = JSON.parse(body);
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
            } catch (err: any) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ error: err.message }));
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
