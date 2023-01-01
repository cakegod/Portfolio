import { defineConfig } from "astro/config";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

export default defineConfig({
  integrations: [
    astroI18next(),
    compress(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
