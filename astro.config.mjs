import { defineConfig } from "astro/config";
import compress from "astro-compress";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
    compress(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
