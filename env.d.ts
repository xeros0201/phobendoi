/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_STRAPI_TOKEN: string
    readonly VITE_STRAPI_BASE_URL: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }