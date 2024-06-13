// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: '"width=device-width, initial-scale=1, maximum-scale=1',
      script: [
        {
          src: 'https://accounts.google.com/gsi/client',
        },
      ],
    }
  },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-auth-utils",
    "nuxt-vue3-google-signin"
  ],
  googleSignIn: {
    clientId: '676101831125-e2a81st863clc7pesjoncui4tv7ve72r.apps.googleusercontent.com',
  },
  runtimeConfig: {
    oauth: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
    },
  },
  
  tailwindcss: {
    exposeConfig: true,
  },

  colorMode: {
    classSuffix: "",
  },

  typescript: {
    shim: false,
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },
});