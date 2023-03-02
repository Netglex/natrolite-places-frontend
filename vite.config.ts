import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/natrolite-places-frontend/",
  plugins: [react(), tsconfigPaths()],
});
