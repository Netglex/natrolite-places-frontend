/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NATROLITE_WEBAPI_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
