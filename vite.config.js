import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  // Relative asset URLs make the site work on GitHub Pages project URLs.
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        forestillinger: resolve(__dirname, "pages/forestillinger.html"),
        omos: resolve(__dirname, "pages/omos.html"),
        tilmeldinger: resolve(__dirname, "pages/tilmeldinger.html"),
        vedtaegter: resolve(__dirname, "pages/vedtægter.html"),
        sponsorer: resolve(__dirname, "pages/sponsorer.html"),
      },
    },
  },
});
