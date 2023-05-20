import { defineConfig } from "astro/config";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true
	 },
  integrations: [
    astroI18next(),
    compress(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
