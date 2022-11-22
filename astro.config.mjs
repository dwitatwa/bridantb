import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@assets": path.resolve("./src/assets"),
        "@layouts": path.resolve("./src/layouts"),
      },
    },
  },
});
