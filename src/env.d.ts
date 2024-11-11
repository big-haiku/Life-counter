/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_KEY: string; // Your OpenAI API key variable
  // Add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
