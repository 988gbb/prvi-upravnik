// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  app: {
    head: {
      title: "prvi upravnik.rs | Profesionalno upravljanje zgradama",
      meta: [
        {
          name: "description",
          content:
            "Upravnik Plus nudi profesionalno upravljanje stambenim zajednicama: transparentno finansijsko vodjenje, hitne intervencije, pravnu podrsku i plan odrzavanja.",
        },
      ],
    },
  },
});
