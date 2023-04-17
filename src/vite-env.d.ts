/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_AZURE_AD_CLIENT_ID: string;
  readonly VITE_AZURE_AD_REDIRECT_URL: string;
  readonly VITE_AZURE_AD_AUTHORITY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
